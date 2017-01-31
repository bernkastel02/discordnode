"use strict";
const DMChannel = require("./DirectMessage")

class Message {
    constructor(client, data) {
        this.client = client;
        
        this.id = data.id;
        this.content = data.content;
        this.channel = client.channels.get(data.channel_id)|| new DMChannel(this.channel, this.client)
        this.guild = this.channel.guild || new DMChannel(this.channel, this.client)
        this.author = client.users.get(data.author.id);
        this.member = this.guild.members.get(data.author.id);
        this.mentions = data.mentions.map(user => client.users.get(user.id)) || [];
        this.pinned = data.pinned;
    }
    
    delete() {
        return new Promise((resolve, reject) => {
            this.client.request({
                method: 'DELETE',
                uri: this.client.ep.Message(this.channel.id, this.id),
                headers: {
                    Authorization: this.client.token
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
    
    edit(content) {
        return new Promise((resolve, reject) => {
            this.client.request({
                method: 'PATCH',
                uri: this.client.ep.Message(this.channel.id, this.id),
                body: {
                    content: content  
                },
                headers: {
                    Authorization: this.client.token
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
    
    pin() {
        return new Promise((resolve, reject) => {
            this.client.request({
                method: 'PUT',
                uri: this.client.ep.Pinned(this.channel.id, this.id),
                headers: {
                    Authorization: this.client.token
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
    
    unpin() {
        return new Promise((resolve, reject) => {
            this.client.request({
                method: 'DELETE',
                uri: this.client.ep.Pinned(this.channel.id, this.id),
                headers: {
                    Authorization: this.client.token
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
}

module.exports = Message;
