+++
title = "From Flask to Zola: the evolution of this website"
description = "My goals for this website and what I learned from building my portfolio website with a bunch of different technology's."
date = 2024-02-04
+++

I finally got around to overhauling my website. In this blog I want to share the goals for the site, why I ended up changing most of the design, and what I learned from all the previous iterations.

## What are my goals with this website?

### Share things that I'm excited and curious about

Recently I have been getting a lot of enjoyment out of reading other people's blogs, and I would like to contribute to the ever growing mountain of interesting information called the internet.
The stuff I'll write about will probably range from data wrangling to tinkering with split keyboards [^1].

### Reinforce what I'm learning by writing about it

For universty I have to write about what I'm learning and I find that helps my understanding. As I'm nearing the end of my studies, this blog will keep that habit alive. And who knows, maybe at some point other people will find value in what I'm learning?

## Why change the website again?

The main reason for overhauling everything is that previous iterations of the website were purely project focused. My background is in [3D-animation](https://vimeo.com/261704101), and project-oriented portfolio websites are the de facto standard in that industry. But I have found this model to work poorly for writing about the development work I have been doing so far. I felt that I could only talk about the projects on a surface level. By changing the format to a blog I hope to go deeper into topics.

The second reason is that, while my previous website looked pretty cool (if I may say so myself), reading [how to build a solar website](https://solar.lowtechmagazine.com/2018/09/how-to-build-a-low-tech-website/) got me interested in simplifying the website. The design I had made required a ton of imagery, which meant more work and a worse page weight. Does performance matter on a site with no visitors? Probably not, but optimizing this website is still a great way for me to learn more about web performance. After reading posts about [the cost of Javascript frameworks](https://timkadlec.com/remembers/2020-04-21-the-cost-of-javascript-frameworks/) and [the ethics of performance](https://timkadlec.com/remembers/2019-01-09-the-ethics-of-performance/) I was curious to see how much I could improve the website.

## The previous iterations of my website

I have had my domain since 2012 and up untill 2020 I just ran various wordpress themes with some custom css.

### Flask

When I started at [the university of applied sciences](https://www.hu.nl/voltijd-opleidingen/open-ict), the first project was to build was a personal website. My goal at the time was getting into machine learning, so the logical choice for the website was to use it as an opportunity to learn Python. I looked into webframeworks and settled on [Flask](https://flask.palletsprojects.com/en/3.0.x/), because it seemed lightweight and I found a great tutorial by [Miguel Grinberg](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world). I learned about buiding and Deploying applications, databases and database migrations, templating languages, and even improved my understanding of HTML because I designed the website with a relatively complicated grid. It was a great time!

{{ img(path="screenshot-of-previous-website.webp", alt="screenshot of a previous iteration of the portfolio website from the author showing an image grid with different image sizes that are staggered and bold overlapping typography", lazy=1) }}

The problem with [this setup](https://github.com/Wolframfriele/Portfolio_website_flask) was that it was overly complex. I was simply serving pages that would change maybe once every half year, and you don't need a database to do so.

### Svelte

I figured I could learn [Svelte](https://svelte.dev/), while also making [my website static](https://github.com/Wolframfriele/wolframfriele.github.io/tree/svelte). To update content I would simply change some json files, re-build the website, and push the result to the main branch. While this worked great for updating projects, I wanted something better suited to blogging.

### Zola

The right tool for my requirements is a static website generator; I have landed on [Zola](https://www.getzola.org/). It has support for code blocks, a templating language that is very similar to Jinja, and is written in Rust (so it must be blazingly fast).

So far it has been an absolute joy to work with. Want to display reading time? There's a [variable build in](https://www.getzola.org/documentation/templates/pages-sections/) for that. Code blocks? Just [enable it in the configuration](https://www.getzola.org/documentation/content/syntax-highlighting/). Footnotes and tables work out of the box. In a way the back-end to my website has been a devolution, becoming simpler and simpler. But simple is good. Especially when the problem does not require complexity. As I keep building out this site, I'll update with my experience of using Zola.

---

[^1] As I'm writing this, the new batteries to make my keyboard wireless and a Raspberry Pi 5 have just arrived. 

