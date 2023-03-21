# Portfolio website

The repository for my portfolio generator.

## Portfolio requirements

I'm feeling inspired by a couple websites. The first is the [solar powererd low tech magazine](https://solar.lowtechmagazine.com/2018/09/how-to-build-a-lowtech-website.html).
I love how the focus is on reducing overhead to serve the page. No dynamic content, small image size (using dithering), no special fonts.
Yet within those constraints they still managed to produce a interesting and good design.

The second inspiration is the website from [Lee Robinson](https://leerob.io/). This is again a very simple site, close in style to what I currently have, but functionaly better.
I like the clear homepage, with more information on the about page, and finaly a good place for writing on the blog page. I don't care much about the stats on the homepage,
although it could be cool to have some strava / statshunters stats on the home page.

Another page that I hope to draw some inspiration from is [fasterthanli.me](https://fasterthanli.me/series/advent-of-code-2022/part-1), the quality of the articles is amazing!
I don't think I can ever reach that level of informativeness, but I can try. I also like the code blocks (with syntax highlighting) and the Cool Bear's hot tips added to the articles.

### Functional Requirements

- Must contain a section where I can post about what I'm learning about / working on.
- Must contain a brief (auto)bio.
- Must have a cv-light version.
- Some way to contact me (need to think more about how).
- Links to main external platforms like github, linkedin and twitter.
- Contain my logo (preferably with a tiny bit of animation).
- Allow posts to be generated from markdown.
- Support codeblocks in the blog / posts section.

### Non-Functional Requirements

- Website must be static
- Main page size under 500 kb.
- Average page size under 1MB.
- First contentfull paint on mobile under 1s on PageSpeed Insights.
- Performance score of 100 for mobile on PageSpeed Insights.
- Accessibility score of 100 on PageSpeed Insights.
- Best Practices score of 100 on PageSpeed Insights.
- SEO Score of 100 on PageSpeed Insights.
- Performance grade of atleast 94 at Pingdom Website Speed Test.
- No use of fonts that need to be downloaded.
- Use typescript for website.