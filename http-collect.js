const http = require('http')
http.get(process.argv[2], (response) => {
    let allData = ''
    response.setEncoding('utf-8')
    response.on('data', (data) => {
        allData += data
    })
    response.on('end', () => {
        console.log(allData.length)
        console.log(allData)
    })
})