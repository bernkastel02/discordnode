"use strict";
const Client = require("./lib/Client");
const Request = require("./lib/handlers/Requester");

function Discord(token, options) {
    return new Client(token, options)
}

Discord.Client = Client;
Discord.Request = Request;

module.exports = Discord;