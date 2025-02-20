const cp = require('child_process')

cp.exec("echo hello world",(err,stdout,stderr)=>{
    console.log(stdout)
    console.log(err)
    console.log(stderr)
})

