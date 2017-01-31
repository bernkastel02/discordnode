"use strict";
const Channel = require("./Channel");

class DirectMessage extends Channel {
    constructor(data, client) {
        super(data);
        this.isPrivate = data.is_private;
        this.lastMessageID = data.last_message_id;
        this.recipient = client.users.get(data.recipients[0].id);
    }
}

module.exports = DirectMessage;