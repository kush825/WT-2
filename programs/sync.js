const fs = require('fs');


//syncronous method

// const data = fs.readFileSync('demo2.txt', 'utf8');

// console.log(data);

// console.log("synchronous data print")

// const data2 = fs.writeFileSync("demo2.txt","hello world");

// console.log(data2)

// const data3 = fs.appendFileSync("demo2.txt","data to append","utf8")

// console.log(data3)


//asynchronous method

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

fs.appendFile("demo.txt","\njay shree ram",(err)=>{
    if(err){
        throw err
    }
})