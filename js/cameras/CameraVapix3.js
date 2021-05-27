const Camera = require('./Camera')

class CameraVapix3 extends Camera
{
    get base_url() {
        return `http://${this._ip_address}/axis-cgi/com`
    }

    move(where) {
        
    }
}

module.exports = CameraVapix3
