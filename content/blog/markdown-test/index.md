+++
title = "Markdown test page"
description = "A page with a bunch of different markdown elements so that I can get a better understanding of how everything looks."
date = 2023-12-18
updated = 2024-01-05
draft = true
+++

I think I want to start each blog post with a short bit of text before I add any titles, but I'm not 100% convinced about that. This is a _good way_ to test that out and see what I like better.

## H2 The first title

It is important to show __headers__ of different size, to get an understanding of the type hierarchy. I think it will look more realistic if I actually add some text inbetween, therefore I'm just typing here.

### H3 A section within the main content

Sometimes I probably will add smaller headings, to split chapters into smaller sections, in theory I want to add support for 4 levels of heading, since I doubt that I will use more [than that](https://www.quora.com/What-is-the-ideal-number-of-levels-of-headings-for-a-good-user-experience-on-web-pages) (Yes I'm quoting Quora for that, deal with it).

#### H4 Small point

I will make a small point in this paragraph.

#### H4 One more heading

Just to see how that would look [^1].

## Different elements

One thing I really need is code blocks, both `inline for commands` and full on:

```rust
use std::cmp::Ordering;

pub fn binary_search(haystack:Vec<i32>, needle: i32) -> Option<usize> {
    let mut l: usize = 0;
    let mut h = haystack.len();
    while l < h{
        let m = l + (h-l)/2;
        match haystack[m].cmp(&needle) {
            Ordering::Equal => return Some(m),
            Ordering::Less => l = m + 1,
            Ordering::Greater => h = m,
        }
    }
    None
}
```
This code block shows an implementation of bubblesort, fun!

---

## Other elements

A typical thing I will need for blogs is an unordered list:
- with some idea
- And then another
    - maybe some more
    - and some more indent
- back one level
    - down one
        - and even more indentation
- wow

Another very helpfull thing is ordered lists.

1. This idea comes first
2. Then we have this other idea
3. what does this do?
4. And back one level

Sometimes I should add quotes

> Maybe you should add a quote to make your point more appealing
>
> Albert Einstein

Images are another very important thing to have in blogs at times.

{{ img(path="cool-image.webp", alt="Highway intersection rendered in 3d", lazy=1) }}
_Figure 1. A cool render I made that seems to be about data and infrastructure._

And lastly I should maybe be able to add tables [^2].


| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

### A task list

- [x] Code cells
- [x] tasks
- [ ] Tables
- [ ] Table of content

---

[^1] This is a how a footnote would look btw.

[^2] Tables are not in the normal markdown spec, but in the [extended spec](https://www.markdownguide.org/extended-syntax/)

