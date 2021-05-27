const Camera = require('./Camera')

class CameraPtzoptics extends Camera
{
    get base_url() {
        return `http://${this._ip_address}/cgi-bin`
    }

    move() {
        
    }
}

module.exports = CameraPtzoptics
