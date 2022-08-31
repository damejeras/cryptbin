<script>
    export let parameters;

    import NotFound from "./NotFound.svelte";
    import { BinService } from "../api/client";
	import { createEventDispatcher } from 'svelte';

    const binService = new BinService();
    const dispatch = createEventDispatcher();

    let loading = true;
    let notFound = false;
    let hint,
        content,
        password = "";

    function submitPassword() {
        loading = true;
        binService
            .submitPassword({ id: parameters.id, password })
            .then((response) => {
                content = response.content;
            })
            .catch((error) => {
                if (error.message.endsWith('paste deleted') || error.message.endsWith('paste not found')) {
                    notFound = true;
                } 

                dispatch('error', {
                    message: error.message
                });
            })
            .finally(() => {
                loading = false;
            });
    }

    binService
        .find({ id: parameters.id })
        .then((response) => {
            hint = response.hint;
        })
        .catch((error) => {
            if (error.message.endsWith('paste not found')) {
                notFound = true;
            } else {
                dispatch('error', {
                    message: error.message
                });
            }
        })
        .finally(() => {
            loading = false;
        });

</script>


{#if notFound}
    <NotFound />
{/if}

{#if !notFound}
    <form autocomplete="off" on:submit|preventDefault={submitPassword}>
        {#if !content}
        <input
        bind:value={password}
        type="text"
        id="decryption-password"
        name="decryption-password"
        placeholder={hint}
    />
            <button on:click={submitPassword} type="button">Submit</button>
        {/if}

        {#if content}
            <label for="content">
                Content
                <textarea
                    bind:value={content}
                    id="content"
                    name="content"
                    placeholder="Content to encrypt"
                    rows="8"
                    readonly
                />
            </label>
            <a href="/" role="button">New Paste</a>
        {/if}
    </form>
{/if}

<style>
    input[type="text"] {
        font-family: monospace;
        text-align: center;
    }
    textarea {
        font-family: monospace;
    }
</style>
