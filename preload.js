//////////////////////////////////////////////////////////////////////////////
// Set up of the communication between the main process and the the renderer
// as explained in this comment :
// https://github.com/electron/electron/issues/9920#issuecomment-575839738

const { contextBridge, ipcRenderer } = require('electron')

const valid_send_channels = [ "camera-init", "camera-action" ]
const valid_receive_channels = [ "camera-response", "camera-data" ]

// This will add an "api" object to the window DOM object of the page
contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, ...args) => {
            if (valid_send_channels.includes(channel)) {
                ipcRenderer.send(channel, ...args)
            }
        },
        receive: (channel, func, ...args) => {
            if (valid_receive_channels.includes(channel)) {
                ipcRendered.on(channel, (event, ...args) => func(...args))
            }
        }
    }
)