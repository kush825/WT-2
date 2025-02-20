import React from "react";

const faculty = [{
    fname:"jadeja sir",
    email:"jadeja@gmail.com",
    mobile_no:7647623651
},{
    fname:"arjun bala sir",
    email:"arjunbala@gmail.com",
    mobile_no:235644342  
},{
    fname:"abc",
    email:"abc@gmail.com",
    mobile_no:2323243242
},{
    fname:"jadeja sir",
    email:"jadeja@gmail.com",
    mobile_no:7647623651
}]

function Facultys() {
    return(
        <div className="container">
            <div className="row">

        {faculty.map((fac,i)=>{
            return(
                <div className="card col-3" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">{fac.fname}</h5>
                  <p className="card-text">{fac.email}</p>
                  <p className="card-text">{fac.mobile_no}</p>
                </div>
              </div>
            )   
        })}
        </div>
        </div>
    )
}

export default Facultys