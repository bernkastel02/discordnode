"use strict";

const Permission = require('./Permission');

class Role {
    constructor(client, data) {
        this.id = data.id;
        this.name = data.name;
        this.color = data.color;
        this.hoist = data.hoist;
        this.position = data.position;
        this.permissions = new Permission(data.permissions);
    }
}

module.exports = Role