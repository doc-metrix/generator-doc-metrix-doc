Yeoman Generator
================
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependencies][dependencies-image]][dependencies-url]

This module is a [Yeoman](http://yeoman.io) generator for [doc-metrix](https://github.com/doc-metrix) metric documentation.


## Getting Started

To use the generator, ensure that you have installed Yeoman:

``` bash
$ npm install -g yo
```

For a general overview of Yeoman generators, see the [Getting Started Guide](http://yeoman.io/learning/).


## Installation

``` bash
$ npm install -g generator-doc-metrix-doc
```

## Usage 

Once installed, navigate to the directory in which you want to place generated files and run

``` bash
$ yo doc-metrix-doc
```

The generator will provide a series of prompts and will use your answers to tailor the documentation files, providing a scaffold upon which you can immediately build.


### Prompts

The prompts are as follows...


#### Name

Enter the documentation name. The default documentation name is the name of the current working directory. To accept the default, type `enter`.

Naming convention:
- 	The documentation name should be descriptive of the documentation.

For example, documentation for `cpu` related metrics should be named `cpu`. Similarly, documentation for `memory` related metrics should be named `memory` or shortened to `mem`. Other examples might include `network`, `sensors-power`, `sensors-temperature`, `sensors-{{ classification }}`, etc.


#### Git

You have the option to initialize the documentation directory as a Git repository. The default option is `Y`. Typing `enter` or `y+enter` will confirm initialization and do the following:

``` bash
$ git init
$ git remote add origin https://github.com/doc-metrix/<repo_name>.git
$ git add -A
$ git commit -m "[INIT]"
```

The initialization process stops short of pushing the commit to the remote repository.

Note: Git initialization assumes you have write access to the [doc-metrix](https://github.com/doc-metrix) organization on Github. If you are not already a member and are interested in contributing, contact one of the [owners](https://github.com/kgryte).


#### Repository

Enter the repository name. The default is the documentation name. Hit `enter` to accept the default as the repository name.


#### Author

Enter the primary author's name; i.e., in all likelihood that will be your name.


#### Email

If you have chosen to initialize the directory as a Git repository, the default will be the email associated with your Github account. This email should be a correspondence address for those individuals wanting to contact you directly with their questions and comments.

If the Github email address is fine, just type `enter`.


#### Description

Enter the documentation description.



### Scaffold

Once you have answered all prompts, you will have the following scaffold:

```
doc/
	- index.json
.gitignore
LICENSE
README.md
TODO.md
bower.json
```

#### Dotfiles

These are standard fare. If you notice that files are not tracking in Git , consult `.gitignore`.


#### License

The default license is the [MIT license](http://opensource.org/licenses/MIT).


#### Bower.json

The generator creates a scaffold `bower.json`. You need to manually add `keywords`. Individuals who want to use the documentation in their libraries can use [Bower](http://bower.io) to manage the documentation as a dependency.

``` bash
$ bower install <documentation_name> --save
```

By default, the Bower package name is the documentation name prefixed by `doc-metrix-`. Hence,

``` bash
doc-metrix-<documentation_name>
```

In order to [register](http://bower.io/docs/creating-packages/#register) the documentation with Bower, you must first tag a release.

``` bash
$ git tag -a <major.minor.patch> -m "[UPDATE] version."
$ git push origin <major.minor.patch>
```

Use [semantic versioning](http://semver.org/) (semvar) for communicating versions.

Once tagged,

``` bash
$ bower register doc-metrix-<documentation_name> git://github.com/doc-metrix/<documentation_name>
```


#### Documentation

The generator includes a `TODO.md` file. Use this file for general TODOs which are not tied to any particular file line.

The `README.md` is a scaffold. You should set the documentation name and add to the documentation description.


#### Resource

Add the metric documentation to `doc/index.json`.


## Notes

If you opted to initialize the module as a Git repository, you will need to manually push changes to Github.

``` bash
$ git push origin master
```



## License

[MIT license](http://opensource.org/licenses/MIT).


---
## Copyright

Copyright &copy; 2014. [Nodeprime](http://nodeprime.com).




[npm-image]: http://img.shields.io/npm/v/generator-doc-metrix-doc.svg
[npm-url]: https://npmjs.org/package/generator-doc-metrix-doc

[travis-image]: http://img.shields.io/travis/doc-metrix/generator-doc-metrix-doc/master.svg
[travis-url]: https://travis-ci.org/doc-metrix/generator-doc-metrix-doc

[coveralls-image]: https://img.shields.io/coveralls/doc-metrix/generator-doc-metrix-doc/master.svg
[coveralls-url]: https://coveralls.io/r/doc-metrix/generator-doc-metrix-doc?branch=master

[dependencies-image]: http://img.shields.io/david/doc-metrix/generator-doc-metrix-doc.svg
[dependencies-url]: https://david-dm.org/doc-metrix/generator-doc-metrix-doc

[dev-dependencies-image]: http://img.shields.io/david/dev/doc-metrix/generator-doc-metrix-doc.svg
[dev-dependencies-url]: https://david-dm.org/dev/doc-metrix/generator-doc-metrix-doc

[github-issues-image]: http://img.shields.io/github/issues/doc-metrix/generator-doc-metrix-doc.svg
[github-issues-url]: https://github.com/doc-metrix/generator-doc-metrix-doc/issues