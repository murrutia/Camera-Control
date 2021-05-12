// You have to require all classes of camera types
const CameraGeneric = require('./CameraPtzoptics.js')

const CLASSES = {
    CameraGeneric
}

const capitalize = ([firstLetter, ...restOfWord]) => firstLetter.toUpperCase() + restOfWord.join('')

class CameraFactory {
    
    generate(type, ip_address) {
        class_name = `Camera${capitalize(type)}`
        return new CLASSES[class_name](ip_address)
    }
}

module.exports = new CameraFactory()
