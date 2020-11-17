# PostCSS Grid Reset

[postcss]: https://github.com/postcss/postcss
[ci-img]: https://travis-ci.org/AndrejGajdos/postcss-grid-reset.svg?branch=main
[ci]: https://travis-ci.org/AndrejGajdos/postcss-grid-reset
[mit]: https://github.com/AndrejGajdos/postcss-grid-reset/blob/master/LICENSE
[releases history]: https://github.com/AndrejGajdos/postcss-grid-reset/blob/master/CHANGELOG.md

[PostCSS] plugin for resetting CSS Grid. This plugin adds rule `min-width:0` to all direct descendants of element `display: grid`.

[postcss]: https://github.com/postcss/postcss

```css
.foo {
  display: grid;
}

.foo-2 {
  display: block;
}
```

```css
.foo {
  display: grid;
}

.foo > * {
  min-width: 0;
}

.foo-2 {
  display: block;
}
```

## 🔗 Links:

- [Preventing a Grid Blowout](https://css-tricks.com/preventing-a-grid-blowout/)
- [Prevent content from expanding grid items](https://stackoverflow.com/questions/43311943/prevent-content-from-expanding-grid-items)

## 🍳 Usage

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-grid-reset
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs]
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-grid-reset'),
    require('autoprefixer')
  ]
}
```

[official docs]: https://github.com/postcss/postcss#usage

## Changelog

See [Releases history]

## License

[MIT]
