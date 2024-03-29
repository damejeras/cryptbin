package main

import (
	"flag"
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/damejeras/cryptbin/internal/bin"
	"github.com/damejeras/ferry"
	"github.com/go-chi/chi/v5"
)

var (
	rootDir string
)

func main() {
	flag.StringVar(&rootDir, "root", "frontend/public", "set SPA files root dir")
	flag.Parse()

	repository := bin.NewInMemoryRepository()
	binService := bin.NewService(repository)

	v1bin := ferry.NewRouter()
	v1bin.Register(
		ferry.Procedure(binService.Find),
		ferry.Procedure(binService.Paste),
		ferry.Procedure(binService.SubmitPassword),
	)

	router := chi.NewRouter()
	router.Mount("/api/v1/BinService", v1bin)
	router.Handle("/api/v1", ferry.ServiceDiscovery(router))

	spa := spaHandler{staticPath: rootDir, indexPath: "index.html"}

	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%s", os.Getenv("PORT")), http.HandlerFunc(
		func(w http.ResponseWriter, r *http.Request) {
			if strings.HasPrefix(r.URL.Path, "/api/v1") {
				router.ServeHTTP(w, r)
				return
			}

			spa.ServeHTTP(w, r)
		},
	)))
}

// spaHandler implements the http.Handler interface, so we can use it
// to respond to HTTP requests. The path to the static directory and
// path to the index file within that static directory are used to
// serve the SPA in the given static directory.
type spaHandler struct {
	staticPath string
	indexPath  string
}

// ServeHTTP inspects the URL path to locate a file within the static dir
// on the SPA handler. If a file is found, it will be served. If not, the
// file located at the index path on the SPA handler will be served. This
// is suitable behavior for serving an SPA (single page application).
func (h spaHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	// get the absolute path to prevent directory traversal
	path, err := filepath.Abs(r.URL.Path)
	if err != nil {
		// if we failed to get the absolute path respond with a 400 bad request
		// and stop
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// prepend the path with the path to the static directory
	path = filepath.Join(h.staticPath, path)

	// check whether a file exists at the given path
	_, err = os.Stat(path)
	if os.IsNotExist(err) {
		// file does not exist, serve index.html
		http.ServeFile(w, r, filepath.Join(h.staticPath, h.indexPath))
		return
	} else if err != nil {
		// if we got an error (that wasn't that the file doesn't exist) stating the
		// file, return a 500 internal server error and stop
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// otherwise, use http.FileServer to serve the static dir
	http.FileServer(http.Dir(h.staticPath)).ServeHTTP(w, r)
}
