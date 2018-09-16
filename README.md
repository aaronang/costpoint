# Costpoint

A command line utility for Costpoint ⏱

## Installation

```shellsession
$ npm install --global costpoint
```

## Usage

```shellsession
$ export COSTPOINT_USERNAME=01234.FIRST.LAST
$ export COSTPOINT_PASSWORD=**********
$ export COSTPOINT_SYSTEM=SYSTEMCONFIG
$ export COSTPOINT_URL=https://example.costpointfoundations.com/cpweb/cploginform.htm
$ costpoint --help

Usage: costpoint [options] [command]

A command line utility for Costpoint.

Options:

  -V, --version             output the version number
  -h, --help                output usage information

Commands:

  show                      show timesheet
  set <line> <day> <hours>  set hours for given project line and day
```

> Note: Export the environment variables in `.profile` to persist the environment variables between sessions.

## Disclaimer

This repository is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Deltek, Inc.
