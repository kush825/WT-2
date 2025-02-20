const fs = require('fs')

fs.copyFile("student_details.txt","xyz.txt",(err)=>{
    if(err)
    {
        throw err
    }
});