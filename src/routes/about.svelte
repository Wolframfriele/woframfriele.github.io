<script context="module">
	export function preload() {
		return this.fetch(`about.json`).then(r => r.json()).then(experience => {
			return { experience };
		});
	}
</script>

<script>
	export let experience;
	import Intro from '../components/Intro.svelte';
	import Eyebrow from '../components/Eyebrow.svelte';
	import Block from '../components/Block.svelte';
	import Doubleblock from '../components/Doubleblock.svelte';
	import CVentry from '../components/CVentry.svelte';	
	import Hello from '../components/Hello.svelte';
</script>

<svelte:head>
	<title>About | Wolfram Friele</title>
</svelte:head>

<header>
	<Intro 
		title="Curious. About a lot of things."
		subTitle="Ask me about animation, AI, bouldering,running, drones, 
							bike-infrastructure...I’m a man of many interests." />
</header>
<section>
	<Eyebrow copy="Biography" left=0 />
	<Block title="Hello, I'm Wolf" wideImage="portrait-wolf" left=0>
		<p>
			I spent the last 8 years working as a 3D motion designer in Amsterdam.
			I’ve gotten tired of making advertisements for a living, so I’m making the switch to the world of AI.
		</p>
		<p>
			Today, I’m attending the Hogeschool Utrecht to learn more about software and artificial intelligence.
			In the future, I want to work for a purpose-driven organization that sees the power of AI to make the
			world a little better.
		</p>
		<p>
			When not at school or work, you’ll find me puzzling through a bouldering problem or running through the woods.
		</p>
	</Block>
</section>
<section>
	<Eyebrow copy="Curriculum Vitae" left=1 />
	<Doubleblock title="Experience" wideImage="man-in-front-off-mountains" left=1 title2="Education">
		<div slot="part1">
			{#each experience as entry}
			<CVentry
				start={entry.start}
				end={entry.end}
				title={entry.title}
				description={entry.description}
			/>
			{/each}
	</div>
	<div slot="part2">
		<CVentry
				title="Brilliant.org Introduction to Neural Networks"
				description="In this course, you'll dissect the internal machinery of artificial neural nets through 
										hands-on experimentation, not hairy mathematics. You'll develop intuition about the kinds 
										of problems they are suited to solve, and by the end you’ll be ready to dive into the algorithms, 
										or build one for yourself."
			/>
	</div>
	</Doubleblock>
	<Hello left=1 />
</section>