"use strict";

class Webhook {
    constructor(client, data) {
        this.id = client.id;
        this.token = client.token;
        
        this.guild_id = data.guild_id;
        this.channel_id = data.channel_id;
        this.user = data.user || null;
        this.name = data.name;
        this.avatar = data.avatar;
    }
}

module.exports = Webhook;