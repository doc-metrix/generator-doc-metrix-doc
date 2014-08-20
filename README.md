Yeoman Generator
================
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependencies][dependencies-image]][dependencies-url]

This module is a [Yeoman](http://yeoman.io) generator for [doc-metrix](https://github.com/doc-metrix) metric specifications.


## Getting Started

To use the generator, ensure that you have installed Yeoman:

``` bash
$ npm install -g yo
```

For a general overview of Yeoman generators, see the [Getting Started Guide](http://yeoman.io/learning/).


## Installation

``` bash
$ npm install -g generator-doc-metrix-spec
```

## Usage 

Once installed, navigate to the directory in which you want to place generated files and run

``` bash
$ yo doc-metrix-spec
```

The generator will provide a series of prompts and will use your answers to tailor the specification files, providing a scaffold upon which you can immediately build.


### Prompts

The prompts are as follows...


#### Name

Enter the specification name. The default specification name is the name of the current working directory. To accept the default, type `enter`.

Naming convention:
- 	The specification name should be descriptive of the specification.

For example, a specification for `cpu` related metrics should be named `cpu`. Similarly, a specification for `memory` related metrics should be named `memory` or shortened to `mem`. Other examples might include `network`, `sensors-power`, `sensors-temperature`, `sensors-{{ classification }}`, etc.


#### Git

You have the option to initialize the specification directory as a Git repository. The default option is `Y`. Typing `enter` or `y+enter` will confirm initialization and do the following:

``` bash
$ git init
$ git remote add origin https://github.com/doc-metrix/<repo_name>.git
$ git add -A
$ git commit -m "[INIT]"
```

The initialization process stops short of pushing the commit to the remote repository.

Note: Git initialization assumes you have write access to the [doc-metrix](https://github.com/doc-metrix) organization on Github. If you are not already a member and are interested in contributing, contact one of the [owners](https://github.com/kgryte).


#### Repository

Enter the repository name. The default is the specification name. Hit `enter` to accept the default as the repository name.


#### Author

Enter the primary author's name; i.e., in all likelihood that will be your name.


#### Email

If you have chosen to initialize the directory as a Git repository, the default will be the email associated with your Github account. This email should be a correspondence address for those individuals wanting to contact you directly with their questions and comments.

If the Github email address is fine, just type `enter`.


#### Description

Enter the specification description.



### Scaffold

Once you have answered all prompts, you will have the following scaffold:

```
spec/
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

The generator creates a scaffold `bower.json`. You need to manually add `keywords`. Individuals who want to use the specification in their libraries can use [Bower](http://bower.io) to manage the specification as a dependency.

``` bash
$ bower install <specification_name> --save
```

By default, the Bower package name is the specification name prefixed by `doc-metrix-`. Hence,

``` bash
doc-metrix-<specification_name>
```

In order to [register](http://bower.io/docs/creating-packages/#register) the specification with Bower, you must first tag a release.

``` bash
$ git tag -a <major.minor.patch> -m "[UPDATE] version."
$ git push origin <major.minor.patch>
```

Use [semantic versioning](http://semver.org/) (semvar) for communicating versions.

Once tagged,

``` bash
$ bower register doc-metrix-<specification_name> git://github.com/doc-metrix/<specification_name>
```


#### Documentation

The generator includes a `TODO.md` file. Use this file for general TODOs which are not tied to any particular file line.

The `README.md` is a scaffold. You should set the specification name and add to the specification description.


#### Specification

Add the specification to `spec/index.json`.


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




[npm-image]: http://img.shields.io/npm/v/generator-doc-metrix-spec.svg
[npm-url]: https://npmjs.org/package/generator-doc-metrix-spec

[travis-image]: http://img.shields.io/travis/doc-metrix/generator-doc-metrix-spec/master.svg
[travis-url]: https://travis-ci.org/doc-metrix/generator-doc-metrix-spec

[coveralls-image]: https://img.shields.io/coveralls/doc-metrix/generator-doc-metrix-spec/master.svg
[coveralls-url]: https://coveralls.io/r/doc-metrix/generator-doc-metrix-spec?branch=master

[dependencies-image]: http://img.shields.io/david/doc-metrix/generator-doc-metrix-spec.svg
[dependencies-url]: https://david-dm.org/doc-metrix/generator-doc-metrix-spec

[dev-dependencies-image]: http://img.shields.io/david/dev/doc-metrix/generator-doc-metrix-spec.svg
[dev-dependencies-url]: https://david-dm.org/dev/doc-metrix/generator-doc-metrix-spec

[github-issues-image]: http://img.shields.io/github/issues/doc-metrix/generator-doc-metrix-spec.svg
[github-issues-url]: https://github.com/doc-metrix/generator-doc-metrix-spec/issues