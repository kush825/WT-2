import React from "react";

const arr = ["apple","banana","pinapal"]

function Fruits(){

    return (
      <>
        
          {arr.map((a,i)=>{
            return(
                <h1>{a} - {i}</h1>
            )
        })}
      </>
    )
}



export default Fruits

