"use strict";


/**
 * Webhook Class.
*/

class Webhook {
    constructor(client, data) {
        this.client = client
        this.id = data.id
        this.token = data.token
        this.avatar = data.avatar
        this.avatarURL = this.client.resolve.avatar(this)
        this.channelID = data.channel_id
        this.guildID = data.guild_id
        this._user = data.user
    }

    get user () {
        if (this.client.users.has(this._user.id))
            return this.client.users.get(this._user.id)
        else
            return this._user
    }

    get channel () {
        return this.client.channels.get(this.channelID)
    }

    get guild () {
        return this.client.guilds.get(this.guildID)
    }
}

module.exports = Webhook;