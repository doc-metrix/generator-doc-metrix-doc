
// MODULES //

var // Expectation library:
	chai = require( 'chai' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //
describe('doc-metrix documentation generator', function tests() {
	'use strict';

	it( 'can be imported' , function test() {
		var app = require( '../app' );
		expect( app ).to.exist;
	});
});
