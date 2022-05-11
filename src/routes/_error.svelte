<script>
	import Cover from "../components/Cover.svelte";
	import Eyebrow from "../components/Eyebrow.svelte";
	import Block from "../components/Block.svelte";
	import Hello from "../components/Hello.svelte";
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>
<header>
	<Cover imageName="data-object" />
</header>
<section>
	<Eyebrow copy="Error Message" left="0" />
	<Block
		title={status}
		wideImage="radio-telescopes"
		paragraph={error.message}
		left=0
	/>
	<Hello left="1" />
</section>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
