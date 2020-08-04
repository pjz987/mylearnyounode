const http = require('http')
const url1 = process.argv[2]
const url2 = process.argv[3]
const url3 = process.argv[4]
const urlArr = [url1, url2, url3]
const stringArr = ['', '', '']
let counter = 0
for (let i=0; i<urlArr.length; i++) {
    const url = urlArr[i]
    http.get(url, (response) => {
        let str = ''
        response.setEncoding('utf-8')
        response.on('data', (data) => {
            str += data
        })
        response.on('end', () => {
            counter++
            stringArr[i] = str
            if (counter === stringArr.length) {
                stringArr.forEach((string) => console.log(string))
            }
        })
    })
}