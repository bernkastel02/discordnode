const DNode = require("discord-node");
const bot = new DNode("Bot Token")
// Replace Bot Token with your token

bot.on("ready", () => {
    console.log("RDY 4 ADVENSHUR"); // change this message to anything
})

bot.on("messageSent", (msg) => {
    // this is a basic command
    if (msg.content === "!ping") {
        bot.sendMessage(msg.channel.id, "Pong!")
    }
})

bot.connect()