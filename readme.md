[Purely](https://github.com/mikaelvesavuori/purely) is part of a family of web development tools which also includes [Barely](https://github.com/mikaelvesavuori/barely), [Minimally](https://github.com/mikaelvesavuori/minimally) and [Only](https://github.com/beingstudio/only). It is succeeded by [Hiperf](https://github.com/mikaelvesavuori/hiperf).

---
# Purely
React-based SPA development boilerplate with performance in mind, inspired by [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate).

## Features
- **Performant**: Asynchronous loading of CSS and optimized script timing with async/defer
- **PWA and offline support**: Your site will behave like an app and be available offline
- **Secure**: .htaccess with tight Content Security Policy and hotlink protection (among lots of other things)
- **Next generation CSS**: Purely encourages the use of Styled Components, but there is also Sass/PostCSS support built-in.
- **High quality code**: ESLint, Stylelint and stylefmt are in place to safeguard your code quality.

## How do I use Purely?
Run `npm run start` or `yarn start` to spin up a development server.

## You'd rather use PostCSS/CSSnext/Sass?
You will need to do some changes to deactivate Styled Components.

### index.html
- Uncomment the CSS and LoadCSS sections at the bottom of the document

### app.jsx
- Uncomment `import "./main.scss";`

### The components/containers folders
Look through the files in these folders and:
- Remove all imports for Styled Components (`import styled from "styled-components"`)
- Remove all consts that refer to `styled.div` or similar
