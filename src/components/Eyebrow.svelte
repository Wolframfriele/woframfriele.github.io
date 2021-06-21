<script>
  export let left = 1
  export let copy = "Eyebrow Copy"
</script>

<style>
  .brow-container {
    margin: 1.5em 0;
  }
  @media (min-width: 700px) {
    .brow-container {
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

    .brow-copy-left {
      grid-column: 2 / 5;
    }

    .brow-copy-right {
      grid-column: 5 / 8;
      text-align: right;
    }

    h2 {
      margin: 0;
    }
  }

</style>

<div class="brow-container">
  {#if left == 1}
    <h2 class="brow-copy-left" aria-label="{copy}">{copy}_</h2>
  {:else}
    <h2 class="brow-copy-right" aria-label="{copy}">{copy}_</h2>
  {/if}
</div>