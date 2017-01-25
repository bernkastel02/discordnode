"use strict";

const Member = require('./Member');
const Channel = require('./Channel');
const Role = require('./Role');

class Guild {
    constructor(client, data) {
        this.client = client;
        
        this.id = data.id;
        this.name = data.name;
        this.icon = data.icon;
        this.region = data.region;
        this.roles = new Map(data.roles.map(role => [role.id, new Role(client, role)]));
        this.emojis = data.emojis;
        this.channels = new Map(data.channels.map(channel => [channel.id, new Channel(client, channel)]));
        this.members = new Map(data.members.map(member => [member.user.id, new Member(client, member)]));
        this.owner = this.members.get(data.owner_id).user;
    }

    get iconURI() {
        return `https://cdn.discordapp.com/icons/${this.id}/${this.icon}.jpg`
    }
    
    rolesOf(user) {
        let user_id;
        switch (user.constructor.name) {
            case 'User': {
                user_id = user.id;
                break;
            }
            case 'Member': {
                user_id = user.id;
                break;
            }
            case 'Message': {
                user_id = user.author.id;
                break;
            }
            case 'String': {
                user_id = user;
                break;
            }
            default: {
                throw new Error('invalid user resolvable');
            }
        }
        return new Map(this.members.get(user_id).roles.map(role_id => [role_id, this.roles.get(role_id)]));
    }
}


module.exports = Guild;