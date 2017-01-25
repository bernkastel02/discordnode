"use strict";

class Message {
    constructor(client, data) {
        this.id = data.id;
        this.content = data.content;
        this.channel = client.channels.get(data.channel_id);
        this.guild = this.channel.guild;
        this.author = client.users.get(data.author.id);
        this.member = this.guild.members.get(data.author.id);
        this.mentions = data.mentions.map(user => client.users.get(user.id)) || [];
        this.pinned = data.pinned;
    }
}

module.exports = Message;
