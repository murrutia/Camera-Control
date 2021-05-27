// You have to require all classes of camera types
const CameraPtzoptics = require('./CameraPtzoptics')
const CameraVapix3 = require('./CameraVapix3')

const CLASSES = {
    CameraPtzoptics,
    CameraVapix3
}

const capitalize = ([firstLetter, ...restOfWord]) => firstLetter.toUpperCase() + restOfWord.join('')

class CameraFactory {
    
    generate(type, ip_address) {
        console.log('generate CameraFactory', type, ip_address)
        const class_name = `Camera${capitalize(type)}`
        console.log(CLASSES[class_name])
        return new CLASSES[class_name](ip_address)
    }
}

module.exports = new CameraFactory()
