<script>
	import Cover from '../components/Cover.svelte';
	import Intro from '../components/Intro.svelte';
	import Eyebrow from '../components/Eyebrow.svelte';
	import Block from '../components/Block.svelte';
	import Contactform from '../components/Contactform.svelte';
</script>

<svelte:head>
	<title>Contact | Wolfram Friele</title>
</svelte:head>

<header>
	<Cover imageName="data-object" />
	<Intro 
		title="Don't be shy."
		subTitle="I’m Utrecht based and am looking for opportunities in the Randstad.
		Hate forms? Send a message to wolframfriele@gmail.com and I’ll get back to you soon." />
</header>
<section>
	<Eyebrow copy="Contactform" left=0 />
	<Block title="Let's get in touch" wideImage="radio-telescopes" left=0>
		<Contactform />
	</Block>
</section>