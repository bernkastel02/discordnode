"use strict";

class Permission {
    constructor(data) {
        this.permissions = [
            'makeInvites',
            'snipMembers',
            'banMembers',
            'administrator',
            'manageChannels',
            'manageGuild',
            'readMessages',
            'makeMessages',
            'makeTTSMessages',
            'snipMessages',
            'makeEmbeds',
            'makeFiles',
            'readMessageHistory',
            'mentionEveryone',
            'useEmojis',
            'joinVoice',
            'speakVoice',
            'muteMembers',
            'deafenMembers',
            'moveMembers',
            'useVAD',
            'changeNickname',
            'manageNicknames',
            'manageRoles'
        ];
        return data;
    }
    
    has(permission) {
        return true;
    }
}

module.exports = Permission