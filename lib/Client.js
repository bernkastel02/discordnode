"use strict";
var EventEmitter;
var Promise;
const Constants = require('./Constants');
const superagent = require('superagent');
const WebSocket = require('ws');
const Zlib = require('zlib');
const fs = require("fs")
const request = require("request")

// Structures
const User = require("./classes/User");
const Message = require("./classes/Message");
const Channel = require("./classes/Channel");
const Guild = require("./classes/Guild");
const Member = require("./classes/Member");
const Role = require("./classes/Role");
const ExpendableUser = require("./classes/ExpendableUser")

// Utitilies
const Horde = require("./utilities/Horde")
const Endpoints = Constants.Endpoints;

// Websockets
const ws = new WebSocket('wss://gateway.discord.gg/?v=6');


try {
    EventEmitter = require('eventemitter3');
} catch(e) { EventEmitter = require('events'); }
try {
    Promise = require('bluebird');
} catch(e) { Promise = global.Promise }


/**
 * The Client of the library.
 * @extends EventEmitter
 * @prop {String} token The token of the Bot.
 * @prop {Object} options Optional ptions that are avaliable to edit. 
 * 
*/
class Client extends EventEmitter {
    
    /**
     * The Client creation
     * @arg {String} token The token of the Bot.
     * @arg {Object} options Optional ptions that are avaliable to edit. 
     * @arg {Boolean} [options.debugEvent=false] Returns all responses gotten from the websocket (Bot Client)
    */
    constructor(token, options) {
        super();
        if (!token) { return 'There isnt a token found!' }
        this.token = token;
        
        this.options = {
            debugEvent: false,
        };
        
        this.isReady = false;
        
        // Classes
        this.users = new Horde();
        this.channels = new Horde();
        this.guilds = new Horde();
        
    }
    
    /**
     * Connection Client
     * @returns {Promise} Returns when the connection has successfully connected, emitting the events.
    */
    
	connect() {
		ws.on('message', (data, flags) => {
            if (flags.binary) 
                data = Zlib.inflateSync(data).toString();
                var message = JSON.parse(data);
                // do something with message
                if(message.s) {
                    this.sequence = message.s;
                }
            switch(message.op) {
                case 10:
                    ws.send(JSON.stringify({
        	            'op': 2,
        	            'd': {
        		            large_theshold: 250,
        		            compress: true,
        		            properties: {
        			            $os: process ? process.platform : 'windows',
        			            $browser: 'discordnode',
        			            $device: 'discordnode'
        		            },
        		            token: this.token
        	            }
                    }));
                    this.heartbeatInterval = setInterval(()=>{
                        ws.send(JSON.stringify({
                            op: 1,
                            d: this.sequence
                        }));
                    }, message.d.heartbeat_interval);
                
                break;
                case 0:
                    switch(message.t) {
                        case 'READY':
                    	    this.isReady = true;
                        	this.startT = Date.now();
                    	    this.emit('ready');
                    	    this.self = new ExpendableUser(this, message.d.user);
                    	    this.token = `${message.d.user.bot && !this.token.startsWith('Bot ') ? 'Bot ' : ''}${this.token}`
                        break;
                        
                        case 'MESSAGE_CREATE':
                            this.emit('messageSent', new Message(this, message.d));
                        break;
                        
                        case "GUILD_CREATE":
                            this.emit("guildCreate", message.d)
                                this.guilds.set(message.d.id, new Guild(this, message.d));
                                message.d.channels.forEach(channel => this.channels.set(channel.id, new Channel(this, channel, message.d.id)))
                                message.d.members.map(member => member.user).forEach(user => {
                                    if (!this.users.has(user.id)) this.users.set(user.id, new User(user));
                                })
                            this.guild = new Guild(this, message.d)
                        break;
                        
                	    case "CHANNEL_CREATE":
                            this.emit('channelCreate', new Channel(this, message.d));
                	    break;
                    }
                break;
            }
		});
	}
	
	sendMessage(channelID, content, embed) {
	    if (typeof content == 'object') {
	        content = {
	            tts: content.tts || false,
	            content: content.content || ""
	        } // form an object for content
	    } else if (typeof content == "string") {
	        content = `${content}` // form a string for content
	    }
        return new Promise((resolve, reject) => {
            request({
                method: 'POST',
                uri: Endpoints.Messages(channelID),
                body: {
                    content: content.content || content,
                    tts: content.tts,
                    file: null,
                    embed: embed || {}
                },
                headers: {
                    Authorization: this.token
                },
                json: true
            }, (error, response, body) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(new Message(body))
                }
            })
        })
    }
    
    uploadFile(channelID, content, file) {
        if (typeof content == "string") {
	        content = `${content}` // form a string for content
	    }
        if (typeof file == "object") {
            file = {
                file: file.file || null
            }
        }
        return new Promise((resolve, reject) => {
            request({
                method: 'POST',
                uri: Endpoints.Messages(channelID),
                formData: {
                    content: content || "",
                    file: fs.createReadStream(file.file)
                },
                headers: {
                    Authorization: this.token,
                    "Content-Type": "multipart/form-data"
                }
            }, (error, response, body) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(body)
                }
            })
        })
    }
    
    react(channelID, messageID, emote) {
        return new Promise((resolve, reject) => {
            request({
                method: 'PUT',
                uri: Endpoints.React(channelID, messageID, emote),
                headers: {
                    Authorization: this.token
                },
                json: true
            }, (error, response, body) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(body)
                }
            })
        })
    }
    
    removeMessage(channelID, messageID) {
        return new Promise((resolve, reject))
    }
}


module.exports = Client;