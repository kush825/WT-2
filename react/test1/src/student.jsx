import React from "react";

const student = [{
    name:"rahul",
    branch:"CSE",
    e_ro:1212234234,
    email:"rahul@gmail.com"

},{
    name:"rahul",
    branch:"CSE",
    e_ro:1212234234,
    email:"rahul@gmail.com"

},{
    name:"rahul",
    branch:"CSE",
    e_ro:1212234234,
    email:"rahul@gmail.com"

},{
    name:"rahul",
    branch:"CSE",
    e_ro:1212234234,
    email:"rahul@gmail.com"

}]
 
function Students() {
    return(
        <div className="container">
            <div className="row">

        {student.map((std,i)=>{
            return(
                <div className="card col-3" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">{std.name}</h5>
                  <p className="card-text">{std.branch}</p>
                  <p className="card-text">{std.email}</p>
                  <p className="card-text">{std.e_ro}</p>
                </div>
              </div>
            )
        })}
        </div>
        </div>
    )
}

export default Students