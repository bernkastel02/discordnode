"use strict";

class Reaction {
    constructor(data) {
        this.timesUsed = data.count;
        this.selfUsed = data.me;
        this.emoji = {
            id: data.emoji.id || null,
            name: data.emoji.name
        }
    }
}

module.exports = Reaction;