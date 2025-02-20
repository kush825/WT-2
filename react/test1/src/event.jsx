import React from "react";

function Event(){
    
    const click = () => {
        console.log("Button clicked");
    }
    return(
        <button onClick={click}>Click me</button>
    )
    
}

export default Event;