"use strict";

class Channel {
    constructor(client, data, guild_id) {
        this.id = data.id || null
        this.channelType = data.type || null
        this.name = data.name || null
        this.guild = client.guilds.get(guild_id) || null
    }
}
module.exports = Channel;