'use strict'

var assert = require('assert')
var fs = require('fs')
var path = require('path')
var os = require('os')
var fse = require('fs-extra')
var ensureFile = require('..')

/* global afterEach, beforeEach, describe, it */

describe('ensure-file', function () {
  var TEST_DIR

  beforeEach(function (done) {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'ensure')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(function (done) {
    fse.remove(TEST_DIR, done)
  })

  describe('+ ensureFile()', function () {
    describe('> when file exists', function () {
      it('should not do anything', function (done) {
        var file = path.join(TEST_DIR, 'file.txt')
        fs.writeFileSync(file, 'blah')
        assert(fs.existsSync(file))
        ensureFile(file, function (err) {
          assert.ifError(err)
          assert(fs.existsSync(file))
          done()
        })
      })
    })

    describe('> when file does not exist', function () {
      it('should create the file', function (done) {
        var file = path.join(TEST_DIR, 'dir/that/does/not/exist', 'file.txt')
        assert(!fs.existsSync(file))
        ensureFile(file, function (err) {
          assert.ifError(err)
          assert(fs.existsSync(file))
          done()
        })
      })
    })
  })

  describe('+ ensureFile.sync()', function () {
    describe('> when file exists', function () {
      it('should not do anything', function () {
        var file = path.join(TEST_DIR, 'file.txt')
        fs.writeFileSync(file, 'blah')
        assert(fs.existsSync(file))
        ensureFile.sync(file)
        assert(fs.existsSync(file))
      })
    })

    describe('> when file does not exist', function () {
      it('should create the file', function () {
        var file = path.join(TEST_DIR, 'dir/that/does/not/exist', 'file.txt')
        assert(!fs.existsSync(file))
        ensureFile.sync(file)
        assert(fs.existsSync(file))
      })
    })
  })
})
