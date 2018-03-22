'use strict';

/**
 * Simple text-formatter & file logger
 *
 * Logger entry point
 *
 * @package leaf-logger
 * @version 0.1.0
 * @author Leafgard <dev@leafgard.fr>
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 */
module.exports = new ( function() {

    // Clears the console on every platform without JSDoc error
    process.stdout.write('\x1Bc');

    // Loading dependencies
    this.colors = require('colors')
    this.dateFormat = require('dateformat')
    this.fs = require('fs')

    // Setting up variables
    this.logPath = undefined
    this.defaultDateFormat = "HH:MM:ss TT"
    this.defaultColor = "white"

    /**
     * Add the desired path for log file and enable his usage
     * @param {string} logFilePath Path for log file
     */
    this.useLogFile = (logFilePath) => {
        this.logPath = logFilePath
        let date = this.dateFormat(new Date(), this.defaultDateFormat)
        this.logInFile(`\r\n=== === [${date}] LAUNCHED NODE APP === ===`)
    }

    /**
     * Sets the default date format to use
     * @param {string} format Date format
     */
    this.setDateFormat = (format) => { this.defaultDateFormat = format }

    /**
     * Default error output
     * @param {string} Message Message to log
     * @param {string} Package Package name as prefix
     * @param {string} DateFormat Date format to use 
     */
    this.error = (Message, Package, DateFormat) => {
        this.log(Message, Package, 'red', DateFormat)
    }

    /**
     * Default success output
     * @param {string} Message Message to log
     * @param {string} Package Package name as prefix
     * @param {string} DateFormat Date format to use 
     */
    this.success = (Message, Package, DateFormat) => {
        this.log(Message, Package, 'green', DateFormat)
    }

    /**
     * Default info output
     * @param {string} Message Message to log
     * @param {string} Package Package name as prefix
     * @param {string} DateFormat Date format to use 
     */
    this.info = (Message, Package, DateFormat) => {
        this.log(Message, Package, 'blue', DateFormat)
    }

    /**
     * Default warn output
     * @param {string} Message Message to log
     * @param {string} Package Package name as prefix
     * @param {string} DateFormat Date format to use 
     */
    this.warn = (Message, Package, DateFormat) => {
        this.log(Message, Package, 'yellow', DateFormat)
    }

    /**
     * Default logging function
     * @param {string}  Message Message to log
     * @param {string}  Package Package name as prefix
     * @param {?string} Color Extra prefix color
     * @param {string}  DateFormat Date format to use
     */
    this.log = (Message, Package, Color, DateFormat) => {
        let date = DateFormat ? this.dateFormat(new Date(), DateFormat) : this.dateFormat(new Date(), this.defaultDateFormat)
        let datePrefix = `[${date}]`
        let packagePrefix = Package ? ` [${Package}]` : ''
        let usedColor = Color ? Color : this.defaultColor
        console.log(this.colors[usedColor](datePrefix + packagePrefix) + ` - ${Message}`)
        this.logInFile(datePrefix + packagePrefix + ` - ${Message}`)
    }

    /**
     * Log in the choosen file a sentence
     * @param {string} Sentence Sentence to log in file
     */
    this.logInFile = (Sentence) => {
        if (this.logPath !== undefined) {
            this.fs.appendFile(this.logPath, Sentence + '\r\n', (err) => {
                if (err) { console.log(err) }
            })
        }
    }

} )