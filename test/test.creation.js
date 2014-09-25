

// MODULES //

var path = require( 'path' ),
	yeoman = require( 'yeoman-generator' );


// VARIABLES //

var helpers = yeoman.test;


// TESTS //

describe( 'doc-metrix documentation generator', function tests() {
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
				'name': 'test',
				'repo': 'doc-metrix-generator-test',
				'description': 'Documentation.',
				'author': 'Jane Doe',
				'email': 'jane@doe.com',
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
				'bower.json',
				'doc/index.json'
			];

		helpers.assertFile( expected );
	});
});
