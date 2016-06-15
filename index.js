'use strict'

var fs = require('graceful-fs')
var mkdirp = require('mkdirp')
var path = require('path')

function createFile (file, cb) {
  function makeFile () {
    return fs.writeFile(file, '', cb)
  }

  fs.exists(file, function (fileExists) {
    if (fileExists) return cb()
    var dir = path.dirname(file)
    fs.exists(dir, function (dirExists) {
      if (dirExists) return makeFile()
      mkdirp(dir, function (err) {
        if (err) return cb(err)
        return makeFile()
      })
    })
  })
}

createFile.sync = function createFileSync (file) {
  if (fs.existsSync(file)) return
  var dir = path.dirname(file)
  if (!fs.existsSync(dir)) mkdirp.sync(dir)
  fs.writeFileSync(file, '')
}

module.exports = createFile
