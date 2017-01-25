"use strict";

const User = require('./User');

class Member {
    constructor(client, data) {
        this.client = client;
        
        this.nick = this.nickname = data.nick;
        this.id = data.user.id;
        this.username = this.name = data.user.username;
        this.discriminator = this.discrim = data.discriminator;
        this.avatar = data.user.avatar;
        this.roles = data.roles;
        this.bot = data.user.bot;
        this.user = new User(data.user);
    }
}

module.exports = Member;