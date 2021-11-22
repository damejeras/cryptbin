<script>
	import "@picocss/pico";

	import page from "page";

	import PasteForm from "./components/PasteForm.svelte";
	import DecryptForm from "./components/DecryptForm.svelte";
	import NotFound from "./components/NotFound.svelte";
	import Notifications from "./components/Notifications.svelte";

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

<a href="https://github.com/damejeras/cryptbin"><img src="/github_ribbon.svg" alt="github ribbon"/></a>
<Notifications bind:this={notifs}></Notifications>
<div class="layout container">
	<header>
		<nav>
			<hgroup style="margin: 1em 0;">
				<h2>cryptbin</h2>
				<h3>share secrets privately</h3>
			</hgroup>
		  </nav>
	</header>
	<main>
		<div>
			<svelte:component this={component} {parameters} on:error={(event) => notifs.spawnError(event)}/>
		</div>
	</main>
	<footer>
		<div style="text-align: center; padding: 1em 0;">
			<small style="opacity: .5;">Messages are AES encrypted in browser and stored in server's RAM. After 3 unssuccesful password inputs, message will be deleted.</small>
		</div>
	</footer>
</div>

<style>
	a {
		position: absolute;
		right: 0;
		top: 0;
	}
	.layout {
		display: flex;
		height: 100vh;
		flex-direction: column;
	}
	header {
		padding-bottom: 1em;
	}
	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-grow: 1;
	}
</style>