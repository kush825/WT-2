import React from "react";

function Faculty_table(){
const faculty = [{
    no:1,
    image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg",
    fname:"Gopi Sanghani mam",
    email:"gopi.sanghani@​darshan.ac.in",
    mobile_no:7647623651
},{
    no:2,
    image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg",
    fname:"arjun bala sir",
    email:"arjun.bala@​darshan.ac.in",
    mobile_no:235644342  
},{
    no:3,
    image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg",
    fname:"Maulik Trivedi sir",
    email:"maulik.trivedi@​darshan.ac.in",
    mobile_no:2323243242
},{
    no:4,
    image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg",
    fname:"jadeja sir",
    email:"pradyuman.jadeja@​darshan.ac.in",
    mobile_no:7647623651
}]

  return(   
  <div className="container">
    <h1>Faculty Details</h1><br />
    <table className="table table-dark table-striped-columns">
        <thead>
        <tr>
            <th scope="col">No.</th>
            <th scope="col">faculty image</th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">mobile_no</th>
        </tr>
        </thead>
        <tbody>
        {faculty.map((fac,i)=>{
            return(
                <>
           
                <tr>
                <td>{fac.no}</td>
                <td scope="row"><img class="w-25 p-2" src={fac.image}/></td>
                <td>{fac.fname}</td>
                <td>{fac.email}</td>
                <td>{fac.mobile_no}</td>
                </tr>
               
            </>
            )
        })}
         </tbody>
    </table>
</div>)

}
export default Faculty_table;

