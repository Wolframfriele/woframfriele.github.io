<script>
  export let left = 1
</script>

<style>
  h2 {
	font-family: "Syne", sans-serif;
  font-size: 2.5em;
  font-weight: 400;
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.02em;
  margin: 0.5em 0;
  }

  .hello {
    text-decoration: none;
    color: white;
  }

  .hello:hover {
    text-decoration: underline;
  }
  @media (min-width: 700px) {
    h2 {
		font-size: 4.5em;
	  }

    .hello-container {
      display: grid;
      grid-template-columns:
        minmax(0, 1fr)
        minmax(50px, 160px)
        minmax(50px, 160px)
        minmax(50px, 160px)
        minmax(50px, 160px)
        minmax(50px, 160px)
        minmax(50px, 160px)
        minmax(0, 1fr);
      grid-gap: 25px;
    }

    .hello-left {
      grid-row: 1;
      grid-column: 2 / 8;
      margin: 0;
    }

    .hello-right {
      grid-row: 1;
      grid-column: 2 / 8;
      justify-self: right;
      margin: 0;
    }
  }
</style>

<div class="hello-container">
  {#if left == 1}
    <h2 class="hello-left"><a href="contact" class="hello">Say Hello</a></h2>
  {:else}
    <h2 class="hello-right"><a href="contact" class="hello">Say Hello</a></h2>
  {/if}
</div>