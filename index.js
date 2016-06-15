'use strict'

var existsFile = require('exists-file')
var fs = require('graceful-fs')
var mkdirp = require('mkdirp')
var path = require('path')

function createFile (file, cb) {
  function makeFile () {
    return fs.writeFile(file, '', cb)
  }

  existsFile(file, function (fileExists) {
    if (fileExists) return cb()
    var dir = path.dirname(file)
    existsFile(dir, function (dirExists) {
      if (dirExists) return makeFile()
      mkdirp(dir, function (err) {
        if (err) return cb(err)
        return makeFile()
      })
    })
  })
}

createFile.sync = function createFileSync (file) {
  if (existsFile.sync(file)) return
  var dir = path.dirname(file)
  if (!existsFile.sync(dir)) mkdirp.sync(dir)
  return fs.writeFileSync(file, '')
}

module.exports = createFile
