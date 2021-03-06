# Costpoint &middot; [![npm](https://img.shields.io/npm/v/costpoint.svg)](https://www.npmjs.com/package/costpoint) ![node](https://img.shields.io/node/v/costpoint.svg)

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
  setm <values...>          set hours for multiple project lines and days
  add <code>                add project code to timesheet
```

## Commands

### `show`

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
```

### `set`

```shellsession
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
```

### `setm`

```shellsession
$ costpoint setm 1 16 3, 2 16 2
┌──────┬─────────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│ Line │ Description │ 16  │ 17  │ 18  │ 19  │ 20  │ 21  │ 22  │ 23  │ 24  │ 25  │ 26  │ 27  │ 28  │ 29  │ 30  │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  0   │ Project A   │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  1   │ Project B   │  3  │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  2   │ Project C   │  2  │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
└──────┴─────────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
```

### `add`

```shellsession
$ costpoint add XXXX.YYYY.ZZ
The following project has been successfully added:
┌──────┬─────────────┬──────────────┐
│ Line │ Description │ Code         │
├──────┼─────────────┼──────────────┤
│  3   │ Project D   │ XXXX.YYYY.ZZ │
└──────┴─────────────┴──────────────┘
┌──────┬─────────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│ Line │ Description │ 16  │ 17  │ 18  │ 19  │ 20  │ 21  │ 22  │ 23  │ 24  │ 25  │ 26  │ 27  │ 28  │ 29  │ 30  │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  0   │ Project A   │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  1   │ Project B   │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  2   │ Project C   │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
├──────┼─────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
│  3   │ Project D   │     │     │     │     │     │     │     │     │     │     │     │     │     │     │     │
└──────┴─────────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
```

## Disclaimer

This repository is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Deltek, Inc.
