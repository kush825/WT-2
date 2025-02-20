const fs = require('fs')

fs.writeFile("student_details.txt","studentid:01\nstudent_name:kush\nstudent_eroll:24010101669\nstudent_mno:4243245354\nstudent_dept:CSE\nstudent_spi:6.11","utf8",(err)=>{
    if(err) {
        throw err
    }
})