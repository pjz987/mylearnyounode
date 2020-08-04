const filteredLs = require('./my-module')

filteredLs(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        console.log(err)
    } else {
        for (let file of data) {
            console.log(file)
        }
    }
})