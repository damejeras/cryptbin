SHELL := /bin/bash

proto:
	oto -template ./api/templates/server.go.plush \
		-out ./api/spec.gen.go \
		-ignore Ignorer \
		-pkg api \
		./api/spec
	gofmt -w ./api/spec.gen.go ./api/spec.gen.go
	oto -template ./api/templates/client.js.plush \
		-out ./frontend/src/api/proto.gen.js \
		-ignore Ignorer \
		./api/spec

pack:
	cd frontend && npm run build
	GOOS=linux GOARCH=amd64 go build -o cryptbin main.go
	tar -czvf 'cryptbin.tar.gz' 'cryptbin' './frontend/public/'
	rm cryptbin

test:
	go test ./...
	cd frontend && npm run test