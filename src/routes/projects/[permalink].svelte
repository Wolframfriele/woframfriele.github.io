<script context="module">
	import { findPost } from "../../projects";

	export function preload(page) {
		const project = findPost(page.params.permalink);

		return { project };
	}
</script>

<script>
	import Block from "../../components/Block.svelte";
	import Eyebrow from "../../components/Eyebrow.svelte";
	import Cover from "../../components/Cover.svelte";
	import Intro from "../../components/Intro.svelte";
	export let project;
</script>

<svelte:head>
	<title>{project.title} | Wolfram Friele</title>
</svelte:head>
<header>
	<Cover imageName={project.coverImage} />
	<Intro title={project.title} subTitle={project.summary} />
	<Eyebrow copy="Project Context" left="0" />
	<Block
		title={project.subTitle}
		wideImage={project.projectContextImage}
		paragraph={project.projectContext}
		weblink={project.weblink}
		date={project.date}
		left="0"
		video={project.video}
	/>
</header>
{#if project.inDepth.length > 0}
	<section>
		<Eyebrow copy="In Depth" left="1" />
		{#each project.inDepth as section, idx}
			<Block
				title={section.title}
				wideImage={section.wideImage}
				squareImage={section.squareImage}
				paragraph={section.paragraph}
				left={(idx + 1) % 2}
			/>
		{/each}
	</section>
{/if}

<style>
</style>
