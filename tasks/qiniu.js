/*
 * grunt-qiniu-cdn
 * https://github.com/gongxiancao/grunt-qiniu-cdn
 *
 * Copyright (c) 2016 GongXian Cao
 * Licensed under the MIT license.
 */

'use strict';

var qiniu = require('../lib/qiniu'),
  path = require('path'),
  async = require('async');

module.exports = function(grunt) {

  grunt.registerMultiTask('qiniu', 'upload static files to cdn', function() {
    var options = this.options({
      prefix: ''
    });

    qiniu.init(options);

    if (!qiniu.check()) {
      grunt.log.error('must provide accessKey, secretKey and bucket');
      return false;
    }

    var _this = this;

    this.files.forEach(function(f) {
      var done = _this.async();

      var srcs = f.src.filter(function (filepath) {
        var fullPath = path.join(f.cwd, filepath);
        return grunt.file.isFile(fullPath);
      });
      async.eachLimit(srcs, options.concurrency || 5, function (filepath, done) {
        var fullPath = path.join(f.cwd, filepath);
        var key = options.prefix + filepath;

        var putPolicy = new qiniu.raw.rs.PutPolicy(options.bucket + ":" + key);
        var token = putPolicy.token();

        qiniu.upload(token, key, fullPath, function(err, ret) {
          if (err) {
            grunt.log.error('!error "' + fullPath + '" => "' + key + '" ' + JSON.stringify(err));
            return done(err);
          }
          grunt.log.success('!ok "' + fullPath + '" => "' + key + '"');
          done();
        });
      }, done);
    });
  });
};