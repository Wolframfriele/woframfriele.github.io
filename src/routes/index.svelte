<script>
	import Cover from "../components/Cover.svelte";
	import Intro from "../components/Intro.svelte";
	import Eyebrow from "../components/Eyebrow.svelte";
	import Block from "../components/Block.svelte";
	import Hello from "../components/Hello.svelte";
	import { projects } from "../projects";
</script>

<svelte:head>
	<title>Work | Wolfram Friele</title>
</svelte:head>

<header>
	<Cover imageName="data-object" />
	<Intro
		title="AI engineer-in-training. Recovering advertising professional."
		subTitle="On the hunt for purpose-driven projects that tackle climate change, global inequality, and fake news."
	/>
</header>
<section>
	<Eyebrow copy="Selection of Work" left="0" />
	{#each projects as project, idx}
		<Block
			title={project.title}
			wideImage={project.coverImage}
			squareImage={project.squareImage}
			paragraph={project.summary}
			link={project.permalink}
			left={idx % 2}
		/>
	{/each}
	<Hello left="1" />
</section>

<style>
</style>
