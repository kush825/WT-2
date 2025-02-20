import React from "react";
import { useState } from "react";

 function Test(){
    const [count, setCount] = useState(0);
    return(
        <>
        <h1>count : {count}</h1><br />
        <button onClick={() => 
        {
            setCount(count+1)
        }
        }>Increment</button>

         <button onClick={() => 
        {
            if( count > 0)
            {
                setCount(count-1)
            }
        }
        }>decrement</button>

         <button onClick={() => 
        {
            setCount(count+5)
        }
        }>Increment+5</button>

        <button onClick={() => 
        {
           if(count > 5)
           {
            setCount(count-5)
           }
           else{
            setCount(count-count)
           }
        }
        }>decrement-5</button>

         <button onClick={() => 
        {
            setCount(0)
        }
        }>reset</button>
        </>

    )
}

export default Test;