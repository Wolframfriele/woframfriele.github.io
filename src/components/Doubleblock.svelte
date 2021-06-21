<script>
  export let title = false
  export let title2 = false
  export let paragraph = false
  export let wideImage = false
  export let left = 0
</script>

<style>
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
      grid-row: 2 / 5;
      grid-column: 2 / 5;
    }
    
    .paragraph-right {
      grid-row: 2 / 5;
      grid-column: 5 / 8;
    }

    .wide-img-left {
      grid-row: 1 / 3;
      grid-column: 1 / 5;
      width: 100%;
      min-height: 400px;
      object-fit: cover;
      object-position: 80%;
    }

    .wide-img-right {
      grid-row: 1 / 3;
      grid-column: 5 / 9;
      width: 100%;
      min-height: 400px;
      object-fit: cover;
      object-position: 80%;
    }

    .title2-left {
      grid-row: 3;
      grid-column: 2 / 8;
      margin: 0.3em 0;
      justify-self: left;
    }

    .title2-right {
      grid-row: 3;
      grid-column: 2 / 8;
      margin: 0.3em 0;
      justify-self: right;
    }

    .paragraph2-left {
      grid-row: 4 / 5;
      grid-column: 2 / 5;
    }
    
    .paragraph2-right {
      grid-row: 4 / 5;
      grid-column: 5 / 8;
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
  {#if title}
    <h3 class:title-left={left == 1} class:title-right={left==0}>
      {title}
    </h3>
  {/if}
  <div class:paragraph-left={left == 1} class:paragraph-right={left==0}>
    <slot name="part1"></slot>
    {#if paragraph}
      <p>
        {paragraph}
      </p>
    {/if}
  </div>
  {#if title2}
    <h3 class:title2-left={left == 0} class:title2-right={left==1}>
      {title2}
    </h3>
  {/if}
  <div class:paragraph2-left={left == 0} class:paragraph2-right={left==1}>
    <slot name="part2"></slot>
  </div>
</div>