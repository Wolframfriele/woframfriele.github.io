<script>
	export let segment;
</script>

<style>
	nav {
		margin: 0;
		padding: 0;
		text-decoration: none;
		font-family: "Syne", sans-serif;
	}

	img {
		width: 44px;
		height: 30px;
	}

	#header-logo:hover {
		text-decoration: none;
	}
	
	#company-name {
		display: inline;
  	color: #d3d3d3;
		font-variant-caps: normal;
		font-weight: 200;
		text-decoration: none;
	}

	ul {
		display: flex;
		justify-content: space-between;
		align-self: center;
		margin: 10px 0;
		padding: 0;
		width: 100%;
	}

	li {
		list-style: none;
	}

	nav a {
		text-decoration: none;
		font-variant-caps: all-small-caps;
		color: #a1a1a1;
		font-size: 1.1em;
	}

	nav a:hover {
		text-decoration: underline;
		color: #a1a1a1;
		font-size: 1.1em;
	}

	.current {
		color: white;
	}

	.current:hover {
		color: #f0f0f0;
		text-decoration: underline;
	}

	@media (min-width: 700px) {
		nav {
			display: grid;
			grid-template-columns:
				minmax(0, 1fr)
				minmax(50px, 160px)
				minmax(50px, 160px)
				minmax(50px, 160px)
				minmax(50px, 160px)
				minmax(50px, 160px)
				minmax(50px, 160px)
				minmax(0, 1fr);
			grid-gap: 25px;
		}

		#header-logo {
			grid-column: 2 / 5;
		}

		ul {
			grid-column: 5 / 8;
			float: right;
			justify-content: flex-end;
			margin: 1em 0;
  	}

		li {
			margin-left: 1em;
		}
	}
</style>

<nav>
	<a id="header-logo" href=".">
		<img src="img/wolfram-friele-logo.svg" width="44" height="30" alt="" id="logo">
		<p id="company-name">Wolfram Friele</p>
	</a>
	<ul>
		<li><a class:current={segment == undefined} href=".">Work</a></li>
		<li><a class:current={segment == "about"} href="about">About</a></li>
		<li><a class:current={segment == "contact"} href="contact">Contact</a></li>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
				the blog data when we hover over the link or tap it on a touchscreen -->
		<!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li> -->
	</ul>
</nav>