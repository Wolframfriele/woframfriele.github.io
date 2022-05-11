
<script>
	import Cover from "../components/Cover.svelte";
	import Intro from "../components/Intro.svelte";
	import Eyebrow from "../components/Eyebrow.svelte";
	import Block from "../components/Block.svelte";
	import Doubleblock from "../components/Doubleblock.svelte";
	import CVentry from "../components/CVentry.svelte";
	import Hello from "../components/Hello.svelte";
	import { about } from "../about";
</script>

<svelte:head>
	<title>About | Wolfram Friele</title>
</svelte:head>

<header>
	<Cover imageName="data-object" />
	<Intro
		title="Curious. About a lot of things."
		subTitle="Ask me about animation, AI, bouldering,running, drones, 
				  bike-infrastructure...I'm a man of many interests."
	/>
</header>
<section>
	<Eyebrow copy="Biography" left="0" />
	<Block title="Hello, I'm Wolf" wideImage="portrait-wolf" left="0">
		<p>
			I spent the last 8 years working as a 3D motion designer in
			Amsterdam. I've gotten tired of making advertisements for a living,
			so I'm making the switch to the world of AI.
		</p>
		<p>
			Today, I'm attending the Hogeschool Utrecht to learn more about
			software and artificial intelligence. In the future, I want to work
			for a purpose-driven organization that sees the power of AI to make
			the world a little better.
		</p>
		<p>
			When not at school or work, you'll find me running through the woods, 
			puzzling through a bouldering problem or taking apart bikes.
		</p>
	</Block>
</section>
<section>
	<Eyebrow copy="Curriculum Vitae" left="1" />
	<Doubleblock
		title="Experience"
		wideImage="man-in-front-off-mountains"
		left="1"
		title2="Education"
	>
		<div slot="part1">
			{#each about.experience as entry}
				<CVentry
					start={entry.start}
					end={entry.end}
					title={entry.title}
					description={entry.description}
				/>
			{/each}
		</div>
		<div slot="part2">
			{#each about.education as entry}
				<CVentry
					title={entry.title}
					description={entry.description}
				/>
			{/each}
		</div>
	</Doubleblock>
	<Hello left="1" />
</section>
