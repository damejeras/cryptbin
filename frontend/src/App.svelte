<script>
	import "@picocss/pico";

	import page from "page";

	import PasteForm from "./components/PasteForm.svelte";
	import DecryptForm from "./components/DecryptForm.svelte";
	import NotFound from "./components/NotFound.svelte";
	import Notifications from "./components/Notifications.svelte";
import { loop_guard } from "svelte/internal";

	let component, parameters;

	page("/", () => {
		component = PasteForm;
	});
	page(
		"/paste/:id",
		(ctx, next) => {
			parameters = ctx.params;
			next();
		},
		() => {
			component = DecryptForm;
		}
	);
	page("*", () => {
		component = NotFound;
	});
	page.start();

	let notifs;
</script>

<Notifications bind:this={notifs}></Notifications>
<div class="layout container">
	<header>
	</header>
	<main>
		<div>
			<svelte:component this={component} {parameters} on:error={(event) => notifs.spawnError(event)}/>
		</div>
	</main>
	<footer>
		<div style="text-align: center;">
		</div>
	</footer>
</div>

<style>
	.layout {
		display: flex;
		height: 100vh;
		flex-direction: column;
	}
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-grow: 1;
	}
</style>