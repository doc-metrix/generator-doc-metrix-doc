Yeoman Generator
================

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


#### Git

You have the option to initialize the specification directory as a Git repository. The default option is `Y`. Typing `enter` or `y+enter` will confirm initialization and do the following:

``` bash
$ git init
$ git remote add origin https://github.com/doc-metrix/{{ repo_name }}.git
$ git add -A
$ git commit -m "[INIT]"
```

The initialization process stops short of pushing the commit to the remote repository.

Note: Git initialization assumes you have write access to the [doc-metrix](https://github.com/doc-metrix) organization on Github. If you are not already a member and are interested in contributing, contact one of the [owners](https://github.com/kgryte).


#### Name

Enter the repository name. The default is the current working directory name. Hit `enter` to accept the default as the repository name.

Naming convention:
- 	The repo name should be descriptive of the specification.

For example, a specification for `cpu` related metrics should be named `cpu`. Similarly, a specification for `memory` related metrics should be named `memory` or shortened to `mem`. Other examples might include `network`, `sensors-power`, `sensors-temperature`, `sensors-{{ classification }}`.


#### Author

Enter the primary author's name; i.e., in all likelihood that will be your name.



### Scaffold

Once you have answered all prompts, you will have the following scaffold:

```
spec/
	- index.json
.gitignore
LICENSE
README.md
TODO.md
```

#### Dotfiles

These are standard fare. If you notice that files are not tracking in Git , consult `.gitignore`.


#### License

The default license is the [MIT license](http://opensource.org/licenses/MIT).


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

