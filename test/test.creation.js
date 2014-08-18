

// MODULES //

var path = require( 'path' ),
	yeoman = require( 'yeoman-generator' );


// VARIABLES //

var helpers = yeoman.test;


// TESTS //

describe( 'doc-metrix specification generator', function tests() {
	'use strict';

	// SETUP //

	beforeEach( function setup( done ) {
		helpers
			.run( path.join( __dirname, '../app' ) )
			.inDir( path.join( __dirname, 'tmp' ) )
			.withOptions({
				'skip-install': true,
				'skip-install-message': true,
				'skip-message': true
			})
			.withPrompt({
				'name': 'doc-metrix-generator-test',
				'author': 'Jane Doe',
				'git': false
			})
			.on( 'ready', function onReady( generator ) {
				// Called before `generator.run()` is called.
			})
			.on( 'end', function onEnd() {
				done();
			});
	});


	// TESTS //

	it( 'creates expected files', function test() {
		var expected = [
				'.gitignore',
				'README.md',
				'TODO.md',
				'LICENSE',
				'spec/index.json'
			];

		helpers.assertFile( expected );
	});
});
