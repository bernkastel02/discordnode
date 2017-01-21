'use strict';
const Constants = require('../Constants');
const superagent = require('superagent');

class Requester {
    /**
     * @arg {String} endpoint The endpoint you want to call.
     * @arg {Object} options The options, all optional.
     * @arg {String} [options.method=GET] The HTTP method for the endpoint.
     * @arg {String} [options.url='https://discordapp.com/api'] The url desired, or uses discords link.
     * @arg {Object} [options.body={}] The body, or what to send.
     * @arg {Object} [options.headers={}] The headers, mainly Authorization.
     * @arg {Boolean} [options.json=true] Whether to send the request in json or not.
     * @returns {Promise} Returned when the body is resolved.
     */ 
    
    setToken (token) {
        this.token = token
    }

    send(endpoint, method = 'GET', body = {}, headers = {}, url) {
        return new Promise((resolve, reject) => {
            if (typeof headers != 'object') headers = {}
            superagent[method.toLocaleLowerCase()]
            (`${url ? `${url}/` : ''}${endpoint}`)
            .send(body)
            .end((err, res) => {
                if (err) reject(err)
                else if (![200, 201, 204].includes(res.statusCode)) reject(new Error(`Invalid status code for URL: ${res.statusCode}`))
                else resolve(res.body)
            })
        });
    }
}

module.exports = Requester;