'use strict';
const Constants = require('../Constants');
const CDN = Constants.CDN;

class Requester {
    constructor () {
        
    }

    user (userRes) {
        if (!userRes) return null
        switch (userRes.constructor.name) {
            case 'User': 
                return userRes.id
                break

            case 'GuildMember': 
                return userRes.user.id
                break

            case 'Message': 
                return userRes.author.id
                break

            case 'Guild': 
                return userRes.owner.id
                break

            case 'DMChannel':
                return userRes.user.id
                break

            case 'String':
                return userRes
                break

            default:
                return null
        }
    }

    channel (channelRes) {
        if (!channelRes) return null
        switch (channelRes.constructor.name) {
            case 'Message': 
                return channelRes.channel.id
                break

            case 'Guild': 
                return channelRes.defaultChannel.id
                break

            case 'DMChannel':
                return channelRes.id
                break

            case 'Channel':
                return channelRes.id
                break

            case 'Webhook':
                return channelRes.channel.id
                break

            case 'String':
                return channelRes
                break

            default:
                return null
        }
    }

    guild (guildRes) {
        if (!guildRes) return null
        switch (guildRes.constructor.name) {
            case 'Message':
                return guildRes.guild.id
                break

            case 'Guild':
                return guildRes.id
                break

            case 'Channel':
                return guildRes.guild.id
                break

            case 'Webhook':
                return guildRes.guild.id
                break

            case 'String':
                return guildRes
                break

            default:
                return null
        }
    }

    message (msgRes) {
        if (!msgRes) return null
        switch (msgRes.constructor.name) {
            case 'Message':
                return msgRes.id
                break

            case 'Channel':
                return msgRes.lastMessage
                break

            case 'String':
                return msgRes
                break

            default:
                return null
        }
    }

    file (fileRes) {
        if (!fileRes) return null
        return new Promise((resolve, reject) => {
            switch (fileRes.constructor.name) {
                case 'Object':
                    let name = fileRes.name
                    let file = this.file(fileRes.file)
                    file.then(fileobj => {
                        name = name || fileobj.name
                        file = fileobj.file
                        resolve({ name, file })
                    })
                    .catch(reject)
                    break

                case 'String':
                    let isLink = fileRes.startsWith('http:')
            }
        })
    }

    avatar (user) {
        return CDN.Avatar(user.id, user.avatar)
    }

    guildIcon (guild) {
        return CDN.GuildIcon(guild.id, guild.icon)
    }

    appIcon (app) {
        return CDN.AppIcon(app.id, app.icon)
    }
}

module.exports = Resolver;