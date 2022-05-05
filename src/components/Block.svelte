<script>
  export let title = false
  export let paragraph = false
  export let wideImage = false
  export let squareImage = false
  export let link = false
  export let left = 0
</script>

<style>
  .square-img {
    display: none;
  }

  .content-block {
    margin: 2em 0;
  }

  @media (min-width: 700px) {
    .content-block {
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
      margin: 2em 0 4em 0;
    }

    .title-left {
      grid-row: 1;
      grid-column: 2 / 8;
      margin: 0.3em 0;
      justify-self: left;
    }

    .title-right {
      grid-row: 1;
      grid-column: 2 / 8;
      margin: 0.3em 0;
      justify-self: right;
    }

    .paragraph-left {
      grid-row: 2;
      grid-column: 2 / 5;
    }
    
    .paragraph-right {
      grid-row: 2;
      grid-column: 5 / 8;
    }

    .align-right {
      text-align: right;
    }

    .wide-img-left {
      grid-row: 1 / 4;
      grid-column: 1 / 5;
      width: 100%;
      min-height: 400px;
      object-fit: cover;
      object-position: 80%;
    }

    .wide-img-right {
      grid-row: 1 / 4;
      grid-column: 5 / 9;
      width: 100%;
      min-height: 400px;
      object-fit: cover;
      object-position: 0;
    }

    .square-img {
      display: inline-block;
      grid-row: 3 / 4;
      grid-column: 4 / 6;
    }
  }
</style>

<div class="content-block">
  {#if wideImage}
    <img
      srcset="
        img/{wideImage}-small.webp 420w,
        img/{wideImage}-medium.webp 800w,
        img/{wideImage}-large.webp 1200w
      "
      src="img/{wideImage}-small.webp"
      width="1200"
      height="585"
      alt=""
      class:wide-img-left={left == 0}
      class:wide-img-right={left == 1}
    />
  {/if}
  {#if squareImage}
    <img
      srcset="
        img/{squareImage}-small.webp 430w,
        img/{squareImage}-large.webp 750w
      "
      src="img/{squareImage}-small.webp"
      width="440"
      height="440"
      alt=""
      class="square-img"
    />
  {/if}
  {#if title}
    <h3 class:title-left={left == 1} class:title-right={left==0}>
      {title}
    </h3>
  {/if}
  <div class:paragraph-left={left == 1} class:paragraph-right={left==0} class:align-right={link != false && left == 0}>
    <slot></slot>
    {#if paragraph}
      <p>
        {paragraph}
      </p>
    {/if}
    {#if link}
      <em>
        <a rel="prefetch" href="projects/{link}" aria-label="Project: {title}">
           See project
        </a>
      </em>
    {/if}
  </div>
</div>