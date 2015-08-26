pinyinize.js
============

[![Build Status](https://travis-ci.org/ericnishio/pinyinize.js.png)](https://travis-ci.org/ericnishio/pinyinize.js)

A tool that converts Hanyu pinyin tone numbers to tone marks.

## Setup

```
$ npm install pinyinize --save
```

## Usage

```javascript
var pinyinize = require('pinyinize');

pinyinize('tai2 wan1'); // returns 'tái wān'
```

## Tests

```
$ npm install -g mocha
$ mocha
```
