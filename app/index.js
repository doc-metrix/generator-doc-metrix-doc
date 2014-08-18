

(function() {
	'use strict';

	// MODULES //

	var path = require( 'path' ),
		yeoman = require( 'yeoman-generator' ),
		yosay = require( 'yosay' ),
		shell = require( 'shelljs' ),
		npmName = require( 'npm-name' ),
		chalk = require( 'chalk' );


	// FUNCTIONS //

	/**
	* FUNCTION: git( name )
	*	Initializes and runs git.
	*/
	function git( name ) {
		var cmd = 'git remote add origin https://github.com/doc-metrix/' + name + '.git';

		// Initialize the repository:
		shell.exec( 'git init' );
		shell.exec( cmd );
		shell.exec( 'git add -A' );
		shell.exec( 'git commit -m "[INIT]"' );
	} // end FUNCTION git()


	// GENERATOR //

	var Generator = yeoman.generators.Base.extend({

		/**
		* METHOD: init()
		*	Generator initialization.
		*/
		init: function() {
			var flg = this.options[ 'skip-message' ];

			this.pkg = require( '../package.json' );
			this.year = (new Date() ).getFullYear();

			if ( typeof flg === 'undefined' || !flg ) {
				this.log( yosay( 'Welcome to the doc-metrix specification generator...' ) );
			}
		},

		/**
		* METHOD: promptUser()
		*	Prompts a user for input relevant to the specification.
		*/
		promptUser: function() {
			var next = this.async(),
				dirname,
				prompts,
				git;

			// Check if the user has Git:
			git = shell.which( 'git' );

			// Get the current directory name:
			dirname = path.basename( process.cwd() );

			// Specify the input prompts required in order to tailor the specification...
			prompts = [
				{
					'type': 'confirm',
					'name': 'git',
					'message': 'Create a new git repository?',
					'default': true,
					validate: function( answer ) {
						if ( answer && !git ) {
							return 'Unable to find git. Ensure that you have git installed.';
						}
						return true;
					}
				},
				{
					when: function( answers ) {
						if ( answers.git ) {
							return true;
						}
						return false;
					},
					'type': 'input',
					'name': 'name',
					'message': 'What is the repo name?',
					'default': dirname
				},
				{
					'type': 'input',
					'name': 'author',
					'message': 'Primary author\'s name?'
				}
			];

			// Prompt the user for responses:
			this.prompt( prompts, function onAnswers( answers ) {
				this.author = answers.author;
				this.repoName = answers.name;
				this.git = answers.git;

				next();
			}.bind( this ) );
		}, // end METHOD promptUser()

		/**
		* METHOD: mkdirs()
		*	Creates specification directories.
		*/
		mkdirs: function() {
			this.mkdir( 'spec' );
		}, // end METHOD mkdirs()

		/**
		* METHOD: dotFiles()
		*	Copies over base dot files.
		*/
		dotFiles: function() {
			this.copy( 'gitignore', '.gitignore' );
		}, // end METHOD dotfiles()

		/**
		* METHOD: license()
		*	Creates a license file.
		*/
		license: function() {
			var context = {
					'holder': this.author,
					'year': this.year
				};

			this.template( '_LICENSE', 'LICENSE', context );
		}, // end METHOD license()

		/**
		* METHOD: todo()
		*	Copies over a TODO file.
		*/
		todo: function() {
			this.copy( '_TODO.md', 'TODO.md' );
		}, // end METHOD todo()

		/**
		* METHOD: readme()
		*	Creates a boilerplate README.
		*/
		readme: function() {
			var context = {
					'author': this.author,
					'year': this.year
				};

			this.template( '_README.md', 'README.md', context );
		}, // end METHOD readme()

		/**
		* METHOD: spec()
		*	Copies over specification boilerplate.
		*/
		spec: function() {
			this.copy( 'spec/_index.json', 'spec/index.json' );
		}, // end METHOD spec()

		/**
		* METHOD: git()
		*	Initializes git.
		*/
		git: function() {
			this.on( 'end', function onEnd() {
				if ( this.git ) {
					console.log( '\n...initializing git...\n' );
					git( this.repoName );
					console.log( '\n...initialized git.\n' );
				}
			});
		} // end METHOD git()

	});


	// EXPORTS //

	module.exports = Generator;

})();
