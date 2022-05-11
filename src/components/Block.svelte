<script>
  export let title = false
  export let paragraph = false
  export let wideImage = false
  export let squareImage = false
  export let link = false
  export let left = 0
  export let date = false
  export let weblink = false
  export let video = false

  function convertDate(date) {
		let d = new Date(date)
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		let month = months[d.getMonth()];
		let year = d.getFullYear();
		return `${month} ${year}_`;
	}
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
      max-height: 500px;
      object-fit: cover;
      object-position: 80%;
    }

    .wide-img-right {
      grid-row: 1 / 4;
      grid-column: 5 / 9;
      width: 100%;
      min-height: 400px;
      max-height: 600px;
      object-fit: cover;
      object-position: 0;
    }

    .square-img {
      display: inline-block;
      grid-row: 3 / 4;
      grid-column: 4 / 6;
    }

    .iframe-container {
      overflow: hidden;
      /* 16:9 aspect ratio */
      padding-top: 56.25%;
      position: relative;
      grid-row: 3 / 4;
      grid-column: 3 / 8;
    }

    .iframe-container iframe {
      border: 0;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
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
    {#if date}
      <em>
        <p><strong>{convertDate(date)}</strong></p>
      </em>
    {/if}
    {#if weblink}
      <em>
        <a rel="prefetch" href="{weblink}">{weblink}</a>
      </em>
    {/if}
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
  {#if video}
    <div class="iframe-container">
      <iframe
        title="Video Player"
        src={video}
        width="1085"
        height="610"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  {/if}
</div>