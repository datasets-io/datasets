Datasets
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Datasets.


## Installation

``` bash
$ npm install datasets
```


## Usage

``` javascript
var datasets = require( 'datasets' );
```

#### Male First Names (en)

A [list](https://github.com/datasets-io/male-first-names-en) of common male first names (also known as [given](https://en.wikipedia.org/wiki/Given_name) or personal names) in English speaking countries.

``` javascript
var names = datasets[ 'male-first-names-en' ];

console.log( names );
/*
	[
		"Aaron",
		"Ab",
		"Abba",
		"Abbe",
		"Abbey",
		"Abbie",
		"Abbot",
		"Abbott",
		...
	]
*/
```

### Female First Names (en)

A [list](https://github.com/datasets-io/female-first-names-en) of common female first names (also known as [given](https://en.wikipedia.org/wiki/Given_name) or personal names) in English speaking countries.

``` javascript
var names = datasets[ 'female-first-names-en' ];

console.log( names );
/*
	[
		"Aaren",
		"Aarika",
		"Abagael",
		"Abagail",
		"Abbe",
		"Abbey",
		"Abbi",
		...
	]
*/
``` 


### Anscombe's Quartet

A [set](https://github.com/datasets-io/anscombes-quartet) of `4` datasets which all have nearly identical simple statistical properties but vary considerably when graphed.

``` javascript
var data = datasets[ 'anscombes-quartet' ];

console.dir( data );
/*
	[[...],[...],[...],[...]]
*/
```


## Examples

``` javascript
var datasets = require( 'datasets' );

console.dir( datasets );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets.svg
[npm-url]: https://npmjs.org/package/datasets

[travis-image]: http://img.shields.io/travis/datasets-io/datasets/master.svg
[travis-url]: https://travis-ci.org/datasets-io/datasets

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/datasets/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/datasets?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/datasets.svg
[dependencies-url]: https://david-dm.org/datasets-io/datasets

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/datasets.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/datasets

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/datasets.svg
[github-issues-url]: https://github.com/datasets-io/datasets/issues
