<p align="center">
    <img alt="" src="https://cdn.discordapp.com/attachments/242256958248321024/250175749670174721/unknown.png">
    <h5 align="center">A library for the DiscordApp API made for Node.js.</h5>
</p>
<hr>
<p align="center">
    <a href="https://discord.gg/YRsNzVF"><img alt="" src="https://img.shields.io/badge/discordnode-join%20us!-blue.svg?style=flat-square"></a>
    <a href="https://www.npmjs.com/package/discord-node"><img alt="" src="https://img.shields.io/npm/dm/discord-node.svg?style=flat-square"></a>
    <a href="https://www.npmjs.com/package/discord-node"><img alt="" src="https://img.shields.io/npm/v/discord-node.svg?maxAge=3600&style=flat-square"></a>
</p>
<hr>

Installing
----------
You need Node.js 4 or above to install Discord Node.

```
npm install discord-node
```

Example
-------
```js
const DNode = require("discord-node");
const bot = new DNode("Bot Token")

bot.on("ready", () => {
    console.log("RDY 4 ADVENSHUR");
})

bot.on("messageSent", (msg) => {
    if (msg.content === "!ping") {
        bot.sendMessage(msg.channel_id, "Pong!")
    }
})

bot.connect()
```


Useful things
-------------
[Documentation](https://github.com/suiika/discordnode/tree/master/docs/README.md)<br>
[NPM Package](https://www.npmjs.com/package/discord-node)<br>
[Github Repository](https://github.com/suiika/discordnodeb)


