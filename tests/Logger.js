// Instanciate the Logger
var Logger = require(`../src/index.js`)

// Enables log file and give log file`s path
Logger.setLogFile(__dirname + `/logfile.txt`)

/**
 * Functions examples
 */

// With variable
let port = 80;
Logger.log(`Server listening on port ${port}`, `ExpressJS`)

// With custom color
Logger.log(`Waiting for new clients`, `Socket.Io`, `gray`)

// With custom color and custom date
Logger.log(`3 rows have been inserted`, `MySQL`, `cyan`, `HH:MM:ss`)

// Set up a new default date format
Logger.setDateFormat('HH:MM')

// Set some new custom default colors
Logger.setTheme({
    success: 'white',
    warn: 'rainbow'
})

// Default success output
Logger.success(`Detected 3 new updates`)

// Default info output
Logger.info(`This is an information`, `Leaf-Logger`)

// Default warn output
Logger.warn(`Port 80 already in use`, `Application`)

// Default error output
Logger.error(`Invalid username passed to request`, `Request`)