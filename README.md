# Costpoint

A command line utility for Costpoint ⏱

## Installation

```shellsession
$ npm install --global costpoint
$ export COSTPOINT_USERNAME="01234.FIRST.LAST"
$ export COSTPOINT_PASSWORD="**********"
$ export COSTPOINT_SYSTEM="SYSTEMCONFIG"
$ export COSTPOINT_URL="https://example.costpointfoundations.com/cpweb/cploginform.htm"
```

> Note: Export the environment variables in `.profile` to persist the environment variables between sessions.
> Make sure to escape the exported environment variables correctly.

## Usage

```shellsession
$ costpoint show
┌──────┬─────────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│ Line │ Description │ 16  │ 17  │ 18  │ 19  │ 20  │ 21  │ 22  │ 23  │ 24  │ 25  │ 26  │ 27  │ 28  │ 29  │ 30  │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  0   │ Project A   │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  1   │ Project B   │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  2   │ Project C   │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
└──────┴─────────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

$ costpoint set 0 16 3
┌──────┬─────────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│ Line │ Description │ 16  │ 17  │ 18  │ 19  │ 20  │ 21  │ 22  │ 23  │ 24  │ 25  │ 26  │ 27  │ 28  │ 29  │ 30  │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  0   │ Project A   │  3  │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  1   │ Project B   │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  2   │ Project C   │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
└──────┴─────────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

$ costpoint setm 1 16 3, 2 16 2
┌──────┬─────────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│ Line │ Description │ 16  │ 17  │ 18  │ 19  │ 20  │ 21  │ 22  │ 23  │ 24  │ 25  │ 26  │ 27  │ 28  │ 29  │ 30  │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  0   │ Project A   │  3  │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  1   │ Project B   │  3  │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  2   │ Project C   │  2  │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
└──────┴─────────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

$ costpoint --help
Usage: costpoint [options] [command]

A command line utility for Costpoint.

Options:

  -V, --version             output the version number
  -h, --help                output usage information

Commands:

  show                      show timesheet
  set <line> <day> <hours>  set hours for given project line and day
  setm <values...>          Set hours for multiple project lines and days.
```

## Disclaimer

This repository is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Deltek, Inc.
