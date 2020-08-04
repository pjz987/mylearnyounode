const fs = require('fs')

const file = fs.readFileSync(process.argv[2])

const fileStr = file.toString()

const lines = fileStr.split('\n')

console.log(lines.length - 1)