pinyinize.js
============

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

A tool that converts Hanyu pinyin tone numbers to tone marks.

## Setup

```
$ npm install pinyinize --save
```

## Usage

```javascript
var pinyinize = require('pinyinize');

pinyinize('tai2 wan1 bu2 shi4 zhong1 guo2'); // returns 'tái wān bú shì zhōng guó'
```

## Tests

```
$ npm install -g mocha
$ npm test
```

## License

MIT © [Eric Nishio](http://ericnish.io)

[npm-url]: https://npmjs.org/package/pinyinize
[npm-image]: https://img.shields.io/npm/v/pinyinize.svg?style=flat-square

[travis-url]: https://travis-ci.org/ericnishio/pinyinize.js
[travis-image]: https://img.shields.io/travis/ericnishio/pinyinize.js.svg?style=flat-square
