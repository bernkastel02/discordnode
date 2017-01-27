"use strict";

class User {
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.discriminator = data.discriminator;
        this.avatar = data.avatar;
        this.avatarURL = (data.avatar === 'f78426a064bc9dd24847519259bc42af') ? `https://discordapp.com/assets/${data.avatar}.png` : `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.jpg`;
        this.bot = data.bot;
    }
    
    get userMention() { return `<@${this.id}>`; }
}

module.exports = User;
