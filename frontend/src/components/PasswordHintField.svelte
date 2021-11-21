<script>
    export let value = '';

    let hints = [
        "Your first name",
        "Your last name",
        "Your Slack handle",
        "Your Github handle"
    ];

    const hintsJSON = localStorage.getItem('hints');
    if (hintsJSON) {
        const parsedHints = JSON.parse(hintsJSON);

        hints = [...parsedHints, ...hints.filter(item => parsedHints.indexOf(item) === -1)];
    }
</script>

<input list="hints" bind:value={value} placeholder="Password hint"/>
<datalist id="hints">
    {#each hints as hint}
        <option>{hint}</option>
    {/each}
</datalist>

<style>
    input {
        font-family: monospace;
    }
</style>
