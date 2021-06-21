<script>
  export let start = false
  export let end = "current"
  export let title
  export let description
</script>

<style>
	.indent {
		margin-left: 3em;
	}
</style>

<div>
  <p>
    {#if start}
    {start} - {end}
    {/if}
    {title}
  </p>
  <p class="indent">
    <em>
      {description}
    </em>
  </p>
</div>