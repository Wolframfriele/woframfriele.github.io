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

	function convertDate(date) {
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

		let month = months[date.getMonth()];
		let year = date.getFullYear();
		return `${month} ${year}_`;
	}
</script>

<svelte:head>
	<title>{project.title} | Wolfram Friele</title>
</svelte:head>
<header>
	<Cover imageName={project.wideImage} />
	<Intro title={project.title} subTitle={project.summary} />
	<Eyebrow copy={convertDate(project.date)} left="0" />
	<Block
		title="Project Context"
		wideImage={project.wideImage}
		paragraph={project.html}
		left="0"
	/>
</header>
<section class="content-block">
	{@html project.html}
</section>

<style>
	.content-block {
		margin: 2em auto;
		width: 1085px;
	}
</style>
