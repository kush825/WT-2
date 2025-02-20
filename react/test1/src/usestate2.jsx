import React from "react";
import { useState } from "react";

function Username(){
    const [name, setName] = useState("");
    return(
        <>
            <h1>Username :{name}</h1>
            <input type="text" name="" id="" onChange={() => {
                setName(name.target.value)
            }}/>
        </>
    )
}

export default Username;