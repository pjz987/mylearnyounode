const fs = require('fs')
fs.readFile(process.argv[2], (err, data) => {
    if (!err) {
        const file = data
        const fileStr = file.toString()
        const lines = fileStr.split('\n')
        console.log(lines.length - 1)
    }
})
