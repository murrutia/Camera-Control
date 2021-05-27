const axios = require('axios')

class Camera {
    constructor(ip_address) {
        this._ip_address = ip_address || "192.168.0.190"
    }

    set ip_address(ip) {
        this._ip_address = ip
    }

    request_get(url, params, resolve, reject) {
        if (resolve || reject) {
            
        }
        return superagent.get(url, params)

    }

    request_post(url, params) {
        return superagent.post(url).query(params)
    }

    action(action, ...args) {
        if (typeof this[action] !== 'function') return false

        this[action](...args)
        return true
    }
}

module.exports = Camera