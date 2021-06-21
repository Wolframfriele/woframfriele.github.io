<script>
  export let title
  export let subTitle
</script>

<style>
  .intro {
    margin: 2em 0;
  }

  @media (min-width: 700px) {
    .intro {
      margin: 4em 0 2em 0;
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

    h1 {
      grid-row: 1;
      grid-column: 2 / 6;
      margin: 0;
    }

    p {
      grid-row: 2;
      grid-column: 2 / 6;
      margin: 0;
    }
  }
</style>

<div class="intro">
  <h1>
    {title}
  </h1>
  <p>
    {subTitle}
  </p>
</div>