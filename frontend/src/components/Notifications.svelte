<script>

import {writable} from 'svelte/store';

    let notifications = writable({});
    
    export function spawnError(event) {
        const now = new Date();

		setTimeout(function() {
            delete $notifications[now.toString()];
            $notifications = $notifications;
		}, 2500	);

		$notifications[now.toString()] = {type: "danger", content: event.detail.message};
	}
</script>

<div>
    <div>
        {#each Object.entries($notifications) as [timestamp, notification]}
            <article class={notification.type}>{notification.content}</article>
        {/each}
    </div>
</div>

<style>
    .danger {
        border: rgb(209, 83, 83) 1px solid;
    }
    div div {
        position: relative;
        left: -50%;
    }
    div {
        left: 50%;
        position: absolute;
        bottom: 1em ;
    }
    article {
        padding: 1em;
        opacity: 1;
    }

</style>
