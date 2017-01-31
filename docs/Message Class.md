Message Class
=============
| Property        | Type          | Description  |
| ------------- |:-------------:| -----:|
| id      | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The ID of the Message |
| content      | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | The content of the message |
| channel | [Channel]() | The channel the message was sent in |
| guild | [Guild]() | The guild the message was sent in |
| author | [User]() | The message's sender |
| member | [Member]() | The member class of the sender |
| metions | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) | An array of mentions in the message |
| pinned | [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | If the message is pinned or not

Message Methods
===============

# .pin()
###### Pins the message.
#### Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

<hr>

# .unpin()
###### Unpins the message.
#### Returns: [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

<hr>

# .edit(content)
###### Edits the message
| Parameters | Description | Type  |
| ------------- |:-------------:| -----:|
| content | The content to edit the message to. | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) |
#### Returns [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[Message](https://github.com/reimuuhakurei/discordnode/blob/master/docs/Message Class.md)>