## [gulp.js](http://gulpjs.com/) project template
<a href="http://badge.fury.io/js/gulp-project-template"><img src="https://badge.fury.io/js/gulp-project-template@2x.png" alt="NPM version" height="18"></a>
[![Dependency Status](https://david-dm.org/bernardogfilho/gulp-project-template.svg?theme=shields.io)](https://david-dm.org/bernardogfilho/gulp-project-template)

This is a template or a initial setup for a simple [gulp](http://gulpjs.com/) project. It aims to provide some common tasks to a web app development within a organized structure.

### Features

- CSS Autoprefixing
- Automatically minify css files
- Automatically compile Sass
- Automatically compile CoffeeScript
- Automatically lint scripts via jsHint
- Automatically uglify script files
- Automatically optimize image files (.jpg, .png, .gif)
- Watches for changes
- Initialize a preview server with LiveReload support
- Generates a optimized build
- SOON: Bundles js modules via browserify
- SOON: Runs Mocha tests


### Structure

A sample project strucutre would be:

```
|-- app
|  |-- bower_modules
|  |-- styles
|  |  |-- style_one.scss
|  |  |-- style_two.scss
|  |-- scripts
|  |  |-- script_one.coffee
|  |  |-- script_two.coffee
|  |-- images
|  |  |-- background.png
|  |-- index.html
|-- dist
|  |-- styles
|  |  |-- main.min.css
|  |-- scripts
|  |  |-- scripts.min.js
|  |-- images
|  |-- index.html
|-- node_modules
|-- test
```

### Build tasks

The tasks this template aims are:

- [x] Compiles scss files
- [x] Minify styles
- [x] Compiles CoffeeScript files
- [x] Runs jsHint against js files
- [ ] Browserify js files
- [ ] Runs mocha tests
- [x] Generates an optimized build 
- [x] Starts a server
- [x] Watches for changes