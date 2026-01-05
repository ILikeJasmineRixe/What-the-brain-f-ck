import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		heading: 'What the (brain) fuck.'
	}
});

export default app;