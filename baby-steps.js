// console.log(process.argv)
// for (let arg of process.argv) {
//     console.log(arg)
// }
let sum = 0

for(let i=2; i<process.argv.length; i++) {
    sum += Number(process.argv[i])
}

console.log(sum)