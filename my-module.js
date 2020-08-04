const fs = require('fs')
function filteredLs(dir, ext, cb) {
    fs.readdir(dir, (err, data) => {
        const files = []
        if (err) {
            return cb(err)
        }
        for (let datum of data) {
            if (datum.split('.')[1] === ext) {
                files.push(datum)
            }
        }
        cb(err, files)
    })
}

module.exports = filteredLs