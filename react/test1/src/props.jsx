import React from "react";


function Props(props){
    return <div> {props.name} </div>;
}
function Demo(props){
    return(
        <Props name={props.name}/>
    )
}

export default Demo;