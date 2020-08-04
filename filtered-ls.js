const fs = require('fs')
fs.readdir(process.argv[2], (err, list) => {
    if (err) {
        console.log(err)
    }
    const fileExt = process.argv[3]
    for (let i=0; i<list.length; i++) {
        const file = list[i]
        if (file.split('.')[1] === fileExt) {
            console.log(file)
        }
    }
})