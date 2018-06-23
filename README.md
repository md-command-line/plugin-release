plugin-release
==============

Releasing Plugin to Heroku  

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/plugin-release.svg)](https://npmjs.org/package/plugin-release)
[![CircleCI](https://circleci.com/gh/MichaelDimmitt/plugin-release/tree/master.svg?style=shield)](https://circleci.com/gh/MichaelDimmitt/plugin-release/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/MichaelDimmitt/plugin-release?branch=master&svg=true)](https://ci.appveyor.com/project/MichaelDimmitt/plugin-release/branch/master)
[![Codecov](https://codecov.io/gh/MichaelDimmitt/plugin-release/branch/master/graph/badge.svg)](https://codecov.io/gh/MichaelDimmitt/plugin-release)
[![Downloads/week](https://img.shields.io/npm/dw/plugin-release.svg)](https://npmjs.org/package/plugin-release)
[![License](https://img.shields.io/npm/l/plugin-release.svg)](https://github.com/MichaelDimmitt/plugin-release/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g plugin-release
$ oclif-example COMMAND
running command...
$ oclif-example (-v|--version|version)
plugin-release/0.0.0 darwin-x64 node-v10.5.0
$ oclif-example --help [COMMAND]
USAGE
  $ oclif-example COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclif-example ask`](#oclif-example-ask)
* [`oclif-example releases:show`](#oclif-example-releasesshow)

## `oclif-example ask`

show application name if found

```
USAGE
  $ oclif-example ask

OPTIONS
  -a, --app=app        (required) app to run command against
  -r, --remote=remote  git remote of app to use
```

_See code: [src/commands/ask.ts](https://github.com/MichaelDimmitt/plugin-release/blob/v0.0.0/src/commands/ask.ts)_

## `oclif-example releases:show`

show latest releases for an app

```
USAGE
  $ oclif-example releases:show

OPTIONS
  -a, --app=app        (required) app to run command against
  -r, --remote=remote  git remote of app to use
```

_See code: [src/commands/releases/show.ts](https://github.com/MichaelDimmitt/plugin-release/blob/v0.0.0/src/commands/releases/show.ts)_
<!-- commandsstop -->
