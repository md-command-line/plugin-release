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
$ plugin-release COMMAND
running command...
$ plugin-release (-v|--version|version)
plugin-release/0.1.5 darwin-x64 node-v10.22.0
$ plugin-release --help [COMMAND]
USAGE
  $ plugin-release COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`plugin-release ask`](#plugin-release-ask)
* [`plugin-release help [COMMAND]`](#plugin-release-help-command)
* [`plugin-release releases:show`](#plugin-release-releasesshow)

## `plugin-release ask`

show application name if found

```
USAGE
  $ plugin-release ask

OPTIONS
  -a, --app=app        (required) app to run command against
  -r, --remote=remote  git remote of app to use
```

_See code: [src/commands/ask.ts](https://github.com/MichaelDimmitt/plugin-release/blob/v0.1.5/src/commands/ask.ts)_

## `plugin-release help [COMMAND]`

display help for plugin-release

```
USAGE
  $ plugin-release help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

## `plugin-release releases:show`

show latest releases for an app

```
USAGE
  $ plugin-release releases:show

OPTIONS
  -a, --app=app        (required) app to run command against
  -r, --remote=remote  git remote of app to use
```

_See code: [src/commands/releases/show.ts](https://github.com/MichaelDimmitt/plugin-release/blob/v0.1.5/src/commands/releases/show.ts)_
<!-- commandsstop -->
