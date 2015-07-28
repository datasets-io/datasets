/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	datasets = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets', function tests() {

	it( 'should export an object', function test() {
		expect( datasets ).to.be.an( 'object' );
		assert.ok( Object.keys( datasets ).length );
	});

});
