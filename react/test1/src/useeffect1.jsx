import React, { useState } from "react";
import { useEffect } from "react";

function UseEffect(){
    const [data , setdata] = useState("");
    useEffect(() => {
        setTimeout(() => {
            setdata("data fatched")
        },3000)
    })

    return(
        <>
        <h1>data is coming after 3 second</h1>
        <h1>{data}</h1>
        </>
    )
}

export default UseEffect