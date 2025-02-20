const fs = require('fs')

const data = fs.readFileSync("abc.txt","utf-8")
 let vowel = ['a','A','e','E','i','I','o','O','u','U']
 let count = 0
 for (let i = 0; i < data.length; i++) {
    if (vowel.includes(data[i])) {
        count++
    }
 }
 console.log(count)