import React, { useEffect } from "react";
import { useState } from "react";

function Useeffect2(){
    const [count,setCount] = useState(0);
    useEffect(() => {
        console.log("hello world")
    },[count])
    
    return(
        <>
        <h1>count :{count}</h1>
        <button onClick={() => {
            setCount(count+1)
        }}>Increment</button>
        </>
    )
}

export default Useeffect2