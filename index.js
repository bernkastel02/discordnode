"use strict";
const Client = require("./lib/Client");

function Discord(token, options) {
    return new Client(token, options)
}

Discord.Client = Client;

module.exports = Discord;