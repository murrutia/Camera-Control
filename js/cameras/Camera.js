class Camera {
    constructor(ip_address) {
        this.ip_address = ip_address || "192.168.0.190"
    }

    set ip_address(ip) {
        this.ip_address = ip
    }
}

module.exports = Camera