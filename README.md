# Static website build with Zola

This serves as my personal website, see [wolframfriele.com](https://wolframfriele.com/).

## Building the website

```
$ zola build
$ minify -r -a -o public/ public
```

## Serving the website
```
$ zola serve
```

## Publishing the website

The website uses Github actions to be build and published. So the process is as simple as making sure that all required changes are committed to the `zola` branch, then creating a merge request from `zola` -> `main`.
