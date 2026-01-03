import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		heading: 'What the (brain) fuck.'
	}
});

function initializeBracketMap(brainFuck) {
	const bracketMap = new Map();
	const stack = [];

	for (let i = 0 ; brainFuck.length; i++) {
		if (brainFuck[i] === '[') {
			stack.push(1);
		} else if (brainFuck[i] === ']') {
			const leftIndex = stack.pop();
			if (leftIndex === undefined) {
				throw new Error(`] at ${i} doesn\'t match`)
			}
			bracketMap.set(leftIndex, i);
			bracketMap.set(i, leftIndex);
		}
	}
}

function interpret(brainFuck) {
	const memoryCells = new Array(30000).fill(0);
	let inputIndex = 0;
	let pointer = 0;
	let output = '';

	for (let i = 0; i < brainFuck.length; i++) {
		const currentCommand = brainFuck[i];

		switch (currentCommand) {
			case '>':
				pointer++;
				break;
			case '<':
				pointer--;
				break;
			case '+':
				memoryCells[pointer]++;
				break;
			case '-':
				memoryCells[pointer]--;
				break;
			case '.':
				// Do Later
				break;
			case ',':
				// Do Later
				// Add Function for User Input sent through frontend
				break;
			case '[':
				if (memoryCells[pointer] === 0) {
					i = initializeBracketMap(brainFuck).get(i);
				}
				break;
			case ']':
				if (memoryCells[pointer] !== 0) {
					i = initializeBracketMap(brainFuck).get(i);
				}
				break;



			default:
				break;
		}
	}
}

export default app;