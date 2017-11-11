# ensure-file

[![Greenkeeper badge](https://badges.greenkeeper.io/Kikobeats/ensure-file.svg)](https://greenkeeper.io/)

![Last version](https://img.shields.io/github/tag/Kikobeats/ensure-file.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/Kikobeats/ensure-file/master.svg?style=flat-square)](https://travis-ci.org/Kikobeats/ensure-file)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/ensure-file.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/ensure-file)
[![Dependency status](https://img.shields.io/david/Kikobeats/ensure-file.svg?style=flat-square)](https://david-dm.org/Kikobeats/ensure-file)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/ensure-file.svg?style=flat-square)](https://david-dm.org/Kikobeats/ensure-file#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/ensure-file.svg?style=flat-square)](https://www.npmjs.org/package/ensure-file)
[![Donate](https://img.shields.io/badge/donate-paypal-blue.svg?style=flat-square)](https://paypal.me/Kikobeats)

> Ensures that the file path exists. Like [fs-extra#ensureFile](https://github.com/jprichardson/node-fs-extra#ensurefilefile-callback) but out of the box.

## Install

```bash
$ npm install ensure-file --save
```

## Usage

```js
'use strict'

var ensureFile = require('ensure-file')
var file = '/tmp/this/path/does/not/exist/file.txt'

ensureFile(file, function (err) {
  console.log(err) // => null
  // file has now been created, including the directory it is to be placed in
})
```

## API

### ensureFile(file, cb)
### ensureFile.sync(file)

#### file

*Required*
Type: `string`

## License

MIT © [Kiko Beats](http://kikobeats.com)
