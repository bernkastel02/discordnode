"use strict";

class Invite {
    constructor(client, data) {
        this.max_age = data.max_age
        this.code = data.code;
        this.guild = client.guilds.get(data.guild.id);
        this.createdOn = data.created_at;
        this.temporary = data.temporary;
        this.uses = data.uses;
        this.max_uses = data.max_uses;
        this.inviter = client.users.get(data.inviter.id);
        this.channel = client.channels.get(data.channel.id)
    }
}

module.exports = Invite;