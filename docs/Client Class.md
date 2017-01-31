Client Class
============
| Property        | Type          | Description  |
| ------------- |:-------------:| -----:|
| token      | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The bot's token |
| options | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | Bot options |
| users | [Horde]()<[User]()> | The users seen by the bot |
| guilds | [Horde]()<[Guild]()> | The guilds seen by the bot |
| channels | [Horde]()<[User]()> | The channels seen by the bot |
| startT | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | The time (in ms) the bot was started |

Client Methods
==============

# .connect()
###### Connects the client to Discord
#### Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

<hr>

# .sendMessage(channelID, content)
###### Sends a message to a channel
| Parameters | Description | Type  |
| ------------- |:-------------:| -----:|
| channelID | The id of the channel to send the message to | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| content | String, or object. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
| content.content | The string being sent | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| content.tts (optional) | If the message should be sent with Text-To-Speech | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) |
| embed (optional) | Embed if being sent. For more information, go to [here](https://discordapp.com/developers/docs/resources/channel#DOC_CHANNEL/embed-object) | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) |
#### Returns [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Message](https://github.com/reimuuhakurei/discordnode/blob/master/docs/Message Class.md)>

<hr>

# .editMessage(channelID, messageID, content)
##### Edits a message.
| Parameters | Description | Type  |
| ------------- |:-------------:| -----:|
| channelID | The id of the channel that the message is being edited from | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| messageID | The id of the message being edited | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
| content | The content to edit the message to. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
#### Returns [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Message](https://github.com/reimuuhakurei/discordnode/blob/master/docs/Message Class.md)>
