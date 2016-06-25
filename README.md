# md-title

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> get title from markdown article

## Install

    npm install --save md-title

## Usage

```js
import getTitle from 'md-title';

const input = `
# awesome *heading*

# second heading

paragragh`;

getTitle(input).text; // awesome heading
getTitle(input).html; // <h1>awesome <em>heading</em></h1>
getTitle(input).node; // mdast node, see remark API
getTitle('');         // undefined
```

## API

### getTitle(input)

#### input

*Required*  
Type: `String`

Markdown string.

## Related

* [md-article][md-article] - extract data from your markdown article
    * [md-content][md-content] - get content from markdown article
    * [md-date][md-date] - get date from markdown article
    * [md-desc][md-desc] - get description from markdown article
    * [md-image][md-image] - get image from markdown article

## License

MIT © [Aleksandr Filatov](https://alfilatov.com)


[npm-url]: https://npmjs.org/package/md-title
[npm-image]: https://img.shields.io/npm/v/md-title.svg?style=flat-square

[travis-url]: https://travis-ci.org/greybax/md-title
[travis-image]: https://img.shields.io/travis/greybax/md-title.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/greybax/md-title
[coveralls-image]: https://img.shields.io/coveralls/greybax/md-title.svg?style=flat-square

[depstat-url]: https://david-dm.org/greybax/md-title
[depstat-image]: https://david-dm.org/greybax/md-title.svg?style=flat-square

[md-article]: https://github.com/greybax/md-article
[md-content]: https://github.com/greybax/md-content
[md-date]: https://github.com/greybax/md-date
[md-desc]: https://github.com/greybax/md-desc
[md-image]: https://github.com/greybax/md-image
