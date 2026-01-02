import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		heading: 'What the (brain) fuck.'
	}
});

function interpret(brainFuck) {
	const memory = new Array(30000).fill(0);
	let pointer = 0;
	let output = '';
	let inputIndex = 0;

	for (let i = 0; i < brainFuck.length; i++) {
		const currentCommand = brainFuck[i];

		// add a switch statement for actual brainFuck ops.
	}
}

export default app;