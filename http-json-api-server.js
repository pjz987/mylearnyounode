const http = require('http')
const url = require('url') // same error if I comment this out
const port = process.argv[2]
const server = http.createServer((req, res) => {
    req.setEncoding('utf-8')
    res.writeHead(200, {'Content-Type': 'application/json'})
    // console.log('http://localhost:' + port +req.url)
    // console.log(port)
    const url = new URL('http://localhost:' + port + req.url) // error happens here
    const endpoint = url.pathname
    const iso = url.searchParams.get('iso')
    const date = new Date(iso)
    console.log(url)
    // console.log(endpoint)
    console.log(iso)
    console.log(date)
    if (endpoint === '/api/parsetime') {
        console.log(endpoint)
        res.write(JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            seconds: date.getSeconds()
        }))
        res.on
    } else if (endpoint === '/api/unixtime') {
        res.write(JSON.stringify({
            unixtime: date.getTime()
        }))
    }
})
server.listen(port)
