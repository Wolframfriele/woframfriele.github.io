<script>
	import Cover from '../components/Cover.svelte';
	import Intro from '../components/Intro.svelte';
	import Eyebrow from '../components/Eyebrow.svelte';
	import Block from '../components/Block.svelte';
	import Hello from '../components/Hello.svelte';
</script>

<style>
	
</style>

<svelte:head>
	<title>Work | Wolfram Friele</title>
</svelte:head>

<header>
	<Cover imageName="data-object" />
	<Intro 
		title="AI engineer-in-training. Recovering advertising professional."
		subTitle="On the hunt for purpose-driven projects that tackle climate change, global inequality, and fake news." />
</header>
<section>
	<Eyebrow copy="Selection of Work" left=0 />
	<Block title="Shmove Reservations"
				 wideImage="projects/beauty-calendar-overview"
				 squareImage="projects/beauty-appointment-modal"
				 paragraph="We build this project, we build this project on rock and roll."
				 link="."
				 left=0
	/>
	<Block title="Showreel_ 2016"
				 wideImage="projects/showreel-2016-building"
				 squareImage="projects/showreel-2016-landscape"
				 paragraph="We build this project, we build this project on rock and roll."
				 link="."
				 left=1
	/>
	<Hello left=1 />
</section>