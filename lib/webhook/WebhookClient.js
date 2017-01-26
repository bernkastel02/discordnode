"use strict";
var EventEmitter;
var Promise;

const request = require("request");
const Constants = require("../Constants.js");
const Endpoints = Constants.Endpoints;

const Webhook = require('../classes/Webhook.js');


try {
    EventEmitter = require('eventemitter3');
} catch(e) { EventEmitter = require('events'); }
try {
    Promise = require('bluebird');
} catch(e) { Promise = global.Promise }


class WebhookClient {
    constructor(token, id) {
        this.token = token;
        this.id = id;
    }
    
    execute(content, options) {
        return new Promise((resolve, reject) => {
            request({
                method: 'POST',
                uri: Endpoints.Webhook(this.id, this.token),
                body: {
                    content: content,
                    username: options.username || null,
                    avatar_url: options.avatar_url || null,
                    tts: options.tts || false,
                    embeds: options.embeds || false
                },
                json: true
            })
        })
    }
}


module.exports = WebhookClient;