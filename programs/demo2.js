const fs = require('fs');
const { start } = require('repl');

// fs.exists("demo.txt",(exists)=>{
//     console.log(exists)
// })

// fs.stat('demo.txt',(err,data)=>{
//     if(err){
//         throw err
//     }

//     console.log(data)
// })

// fs.rename('demo.txt','demo12.txt',(err)=>{
//     if(err){
//         throw err
//     }
// })
// fs.unlink('demo12.txt',(err)=>{
//     if(err){
//         throw err
//     }
// })

// fs.writeFile("demo.txt",'hello world',(err)=>{
//     if(err){
//         throw err
//     }
// })

// fs.readFile('demo.txt','utf8',(err,data)=>{
//     if(err){
//         throw err
//     }
//     console.log(data)
// })

// fs.createReadStream('demo.txt',{start:(0),end:(5)}) 

// fs.copyFile("demo.txt","demo2.txt",(err)=>{
//     if(err){
//         throw err
//     }
// })

fs.link('demo.txt','demo2.txt')

