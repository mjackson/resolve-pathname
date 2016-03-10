# resolve-pathname [![Travis][build-badge]][build] [![npm package][npm-badge]][npm]

[build-badge]: https://img.shields.io/travis/mjackson/resolve-pathname/master.svg?style=flat-square
[build]: https://travis-ci.org/mjackson/resolve-pathname

[npm-badge]: https://img.shields.io/npm/v/resolve-pathname.svg?style=flat-square
[npm]: https://www.npmjs.org/package/resolve-pathname

[resolve-pathname](https://www.npmjs.com/package/resolve-pathname) resolves URL pathnames identical to the way browsers resolve the pathname of an `<a href>` value. The goals are:

  - 100% compatibility with browser pathname resolution
  - Pure JavaScript implementation (no DOM dependency)

## Installation

Using [npm](https://www.npmjs.com/):

    $ npm install --save resolve-pathname

Then, use as you would anything else:

```js
// using an ES6 transpiler, like babel
import resolvePathname from 'resolve-pathname'

// not using an ES6 transpiler
var resolvePathname = require('resolve-pathname').resolvePathname
```

The UMD build is also available on [npmcdn](https://npmcdn.com):

```html
<script src="https://npmcdn.com/resolve-pathname/umd/resolvePathname.min.js"></script>
```

You can find the library on `window.resolvePathname`.

## Usage

```js
import resolvePathname from 'resolve-pathname'

// Simply pass the pathname you'd like to resolve. Second
// argument is the path we're coming from, or the current
// pathname. It defaults to "/".
resolvePathname('about', '/company/jobs') // /company/about
resolvePathname('../help', '/company/jobs') // /help
resolvePathname('about') // /about
resolvePathname('/about') // /about

// Index paths (with a trailing slash) are also supported and
// work the same way as browsers.
resolvePathname('about', '/company/info/') // /company/info/about

// In browsers, it's easy to resolve a URL pathname relative to
// the current page. Just use window.location! e.g. if
// window.location.pathname == '/company/jobs' then
resolvePathname('about', window.location.pathname) // /company/about
resolvePathname('../help', window.location.pathname) // /help
```

## Prior Work

- [resolve-url](https://www.npmjs.com/package/resolve-url) - A DOM-dependent implementation of the same algorithm
- [path.resolve](https://nodejs.org/api/path.html#path_path_resolve_from_to) - node's posix-compliant path resolution algorithm for filesystems
