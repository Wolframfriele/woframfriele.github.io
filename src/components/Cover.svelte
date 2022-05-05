<script>
  export let imageName
</script>

<style>
  .cover-image {
    margin-top: 1em;
    max-height: 100px;
    object-fit: cover;
  }

  @media (min-width: 700px) {
    .cover-image {
      width: 100%;
      max-height: 250px;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
</style>

<img
  srcset="
  img/{imageName}-mobile.webp  440w,
  img/{imageName}-small.webp   800w,
  img/{imageName}-medium.webp 1200w,
  img/{imageName}-large.webp  1920w
  "
  src="img/{imageName}-mobile.webp" 
  width="1920"
  height="250"
  alt=""
  class="cover-image">