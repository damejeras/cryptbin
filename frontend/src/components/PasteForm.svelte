<script>
    import PasswordHintField from "./PasswordHintField.svelte";
    import { encrypt } from "./../crypto/encrypt";
    import { BinService } from "./../api/proto.gen";

    const binService = new BinService();

    let hint,
        password,
        content,
        id,
        link = "";
    let burnOnRead = true;
    let encryptButton, linkField, notifyTimeout;
    let copyButtonLabel = "Copy Link";

    async function submit() {
        encryptButton.setAttribute("aria-busy", "true");
        encrypt(content, password)
            .then((encryptedValue) => {
                binService
                    .paste({
                        Hint: hint,
                        EncryptedContent: encryptedValue,
                        BurnOnRead: burnOnRead,
                    })
                    .then((response) => {
                        content = "";

                        id = response.id;
                        link = `${document.location.origin}/paste/${id}`;
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .finally(() => {
                encryptButton.setAttribute("aria-busy", "false");
            });
    }

    function copyLink() {
        if (notifyTimeout) {
            clearTimeout(notifyTimeout);
        }
        linkField.setAttribute("aria-invalid", "false");
        linkField.select();
        document.execCommand("copy");
        copyButtonLabel = "Link Copied!";
        notifyTimeout = setTimeout(function () {
            if (linkField) {
                linkField.removeAttribute("aria-invalid");
                copyButtonLabel = "Copy Link";
            }
        }, 2000);
    }

    function reset() {
        id = "";
        link = "";
    }
</script>

<form autocomplete="off" on:submit|preventDefault>
    {#if !id}
        <div class="grid">
            <label for="decryption-password-hint">
                Hint decryption password
                <PasswordHintField bind:value={hint} />
            </label>

            <label for="decryption-password">
                Decryption password
                <input
                    bind:value={password}
                    type="text"
                    id="decryption-password"
                    name="decryption-password"
                    placeholder="Password"
                />
            </label>
        </div>
        <label for="content">
            Content
            <textarea
                bind:value={content}
                id="content"
                name="content"
                placeholder="Content to encrypt"
                rows="8"
            />
        </label>

        <fieldset>
            <label for="burn">
                <input
                    type="checkbox"
                    id="burn"
                    name="burn"
                    role="switch"
                    bind:checked={burnOnRead}
                />
                Burn on read
            </label>
        </fieldset>
        <button type="button" bind:this={encryptButton} on:click={submit}
            >Encrypt</button
        >
    {/if}

    {#if id}
        <input
            type="text"
            bind:this={linkField}
            bind:value={link}
            style="text-align: center;"
            readonly
        />
        <div class="grid">
            <button on:click={copyLink} class="secondary" type="button"
                >{copyButtonLabel}</button
            >
            <button on:click={reset} type="button">Create New</button>
        </div>
    {/if}
</form>

<style>
    input {
        font-family: monospace  ;
    }
    textarea {
        font-family: monospace;
    }
</style>
