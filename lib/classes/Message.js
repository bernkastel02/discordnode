"use strict";

class Message {
    constructor(data) {
        this.type = data.type;
        this.tts = data.tts;
        this.timestamp = data.timestamp;
        this.pinned = data.pinned;
        this.nonce = data.nonce;
        this.mentions = data.mentions;
        this.role_mentions = data.mention_roles;
        this.everyone_mentioned = data.mention_everyone;
        this.id = data.id;
        this.embeds = data.embeds;
        this.edit_timestamp = data.edited_timestamp;
        this.content = data.content;
        this.author = data.author;
        this.attachments = data.attachments;
    }
}

module.exports = Message;
