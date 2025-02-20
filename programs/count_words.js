const fs = require('fs')

let words
let data = fs.readFileSync("abc.txt","utf-8")
words = data.split(" ")
console.log(words.length)

 
