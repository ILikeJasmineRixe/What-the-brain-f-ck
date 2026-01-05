export function initializeBracketMap(brainFuck) {
	const bracketMap = new Map();
	const stack = [];

	for (let i = 0; i < brainFuck.length; i++) {
		if (brainFuck[i] === '[') {
			stack.push(i);
		} else if (brainFuck[i] === ']') {
			const leftIndex = stack.pop();
			if (leftIndex === undefined) {
				throw new Error(`']' at ${i} does not match`)
			}
			bracketMap.set(leftIndex, i);
			bracketMap.set(i, leftIndex);
		}
	}

	if (stack.length > 0) {
		throw new Error(`'[' at ${stack.pop()} does not match`);
	}

	// almost forgot this lol
	return bracketMap;
}

export function interpret(brainFuck) {
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
				output += String.fromCharCode(memoryCells[pointer]);
				break;
			case ',':
				/*	TODO:
					Still not sure 100% on implementing this but so far heres my idea:
					1. Add some form of state machine that consistently running and wiaiting on user input dybamcially and accoridng to when the code requests it.
					2. As usual, upon a "," input, we just convert the ascii char to Decimal (charCodeAt()) and save to pointer location (and icnrement inputIndex)
					3. When the interpreter here reuqests input and sends to the state machine, state machine tells frontend to render a dynamic UI input interface form input wtv the (brain) fuck
					   and then when the user submits, just append said string to the input buffer.
				*/
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

	return output;
}