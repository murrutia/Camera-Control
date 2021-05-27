

module.exports = function(win) {

    const { ipcMain } = require('electron')
    const CameraFactory = require('./js/cameras/CameraFactory')
    
    let camera // will store the current active camera
    console.log('camera-controls', win)

    ipcMain.on('camera-init', (event, type, ip_address) => {
        camera = CameraFactory.generate(type, ip_address)
        mainWindow.webContents.send('camera-response', 'Camera generated')
    })
}