<script>
    export let value = '';
</script>

<input list="hints" bind:value={value} placeholder="Password hint"/>
<datalist id="hints">
    <option>Your first name</option>
    <option>Your last name</option>
    <option>Your Slack handle</option>
    <option>Your Github handle</option>
</datalist>

<style>
    input {
        font-family: monospace;
    }
</style>