<script>
  import { interpret } from './lib/brainfuck.js';

  let code = '>++++++++[<++++>-]>++++++++++[<++++++>-]<++++++.[-]>++++++++++[<++++++++++>-]<+.--.--.++++++++++++++++++++.--.--------------.<.>++++.+++++++++++.<+++++++.------->-.<.>-------------.+++++++++++++++.-------..+++++++++++.<++++++++++++++.';
  let output = '';
  function runBf() {
    output = interpret(code.replace(/\s/g, ''));
    // The interpreter should be skipping white space but apparently its not and breaks instead it changes the string upon reading it... so i just put a replace here.
    console.log(output);

  }

  export let heading;
</script>

<main>
  <button on:click={runBf}>Run</button>
  <h1>{heading}</h1>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap");

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    font-family: "Crimson Text", serif;
    font-size: 4em;
    color: #ffffff;
    background-clip: text;
    text-align: center;
    margin: 2rem 0 1rem;
    user-select: none;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
