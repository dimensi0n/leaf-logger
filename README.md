# leaf-logger
Simple text-formatter &amp; file logger

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

<p align="center"><img src="https://i.imgur.com/qKMfJTc.png" style="border-radius: 10px" width="600"></p>

# Features
* Empty the console when launching the application
* Formatting informations in the console with extra colors
* Add an optional log file with custom location and name
* Add a custom prefix (package name) for informations display
* Custom date format for informations display
* Pre-defined functions for errors, informations, successes and warnings 

# Installation
```bash
$ npm i leaf-logger
```

# Usage
## Instanciate the logger

After `$ npm i leaf-logger`, just require the package like that:
```js
const Logger = require('leaf-logger')
```

## Use a log file

Logger has no log file by default. If you want one, you should declare it like that:
```js
Logger.useLogFile(__dirname + '/logs.txt')
```

## Use a different date format

Logger's default date format is `HH:MM:ss TT`.
You can use all the date formats from [DateFormat](https://www.npmjs.com/package/dateformat) and change it like that:
```js
Logger.setDateFormat('HH:MM')
```

## Methods

### Default function
**`Logger.log(Message, Prefix, Color, DateFormat)`**

### Pre-defined functions
**`Logger.success(Message, Prefix, DateFormat) // Green`**

**`Logger.error(Message, Prefix, DateFormat) // Red`**

**`Logger.info(Message, Prefix, DateFormat) // Blue`**

**`Logger.warn(Message, Prefix, DateFormat) // Yellow`**

For each of these functions, only `Message` isn't optional, and color is `white` by default. `DateFormat` is the default one, except if you change it for **this** log !

All arguments should be strings, here's an example:

```js
const port = 80
Logger.log(`Server started on port ${port}`, `ExpressJS`, `grey`, `HH:MM`)
```

# Build With

* [Colors](https://npmjs.com/package/colors) - A package to get colors in your Node.JS console
* [DateFormat](https://npmjs.com/package/dateformat) - A node.js package for Steven Levithan's excellent `dateFormat()` function 

# License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.