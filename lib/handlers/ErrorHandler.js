"use strict";
const chalk = require("chalk");

class ErrorHandler {
    error(errMsg, errType) {
        if (!errMsg) {
            return "Please provide an error message!";
        } else {
            return new errType + Error("test")
        }
    }
    
    warn(warnMsg) {
        if (!warnMsg) {
            return "Please provide an warning message!";
        } else {
            return console.log(chalk.yellow.bold('Warning: ') + warnMsg);
        }
    }
    
    success(winMsg) {
        if (!winMsg) {
            return "Please provide an success message!";
        } else {
            return console.log(chalk.green.gold('Success: ') + winMsg);
        }
    }

    info(infoMsg) {
        if (!infoMsg) {
            return "Please provide an info message!";
        } else {
            return console.log(chalk.blue.bold('INFO: ') + infoMsg)
        }
    }
}

module.exports = ErrorHandler