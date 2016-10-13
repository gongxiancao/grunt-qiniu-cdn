# grunt-qiniu-cdn

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-qiniu-cdn --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-qiniu');
```

## The "qiniu" task

### Overview
In your project's Gruntfile, add a section named `qiniu` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  qiniu: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  },
});
```

### Options

#### options.accessKey
Type: `String`
Default value: `',  '`


#### options.secretKey
Type: `String`
Default value: `'.'`

#### options.bucket
Type: `String`
Default value: `'.'`

#### options.prefix
Type: `String`
Default value: `'.'`


### Usage Examples

#### Custom Options

```js
grunt.initConfig({
  qiniu: {
    options: {
      accessKey: '',
      secretKey: '',
      bucket: '',
      prefix: 'portal/'
    },
    dist: {
      cwd: 'deployment/www',
      src: ['**/*.*']
    }
  },
});
```
