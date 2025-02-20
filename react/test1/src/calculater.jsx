import React, { useState } from "react";

function Calculator(){
    const [input,setInput] = useState("")
    const handleClick = (e)=>{
        console.log(e);
        setInput(input + e)
        if(e == '='){
            setInput(eval(input))
        }
    }
    return(
        <>
        <div className="container text-center border border-black  border-5">
            <div className="row">
                <input type="text" name="" id="" value={input} />
            </div><br />
            <div className="row">
                <div className="col"><button onClick={()=> handleClick('1')}>1</button></div>
                <div className="col"><button onClick={()=> handleClick('2')}>2</button></div>
                <div className="col"><button onClick={()=> handleClick('4')}>4</button></div>
                <div className="col"><button onClick={()=> handleClick('+')}>+</button></div>
            </div><br />
            <div className="row">
                <div className="col"><button onClick={()=> handleClick('4')}>4</button></div>
                <div className="col"><button onClick={()=> handleClick('5')}>5</button></div>
                <div className="col"><button onClick={()=> handleClick('6')}>6</button></div>
                <div className="col"><button onClick={()=> handleClick('-')}>-</button></div>
            </div><br />
            <div className="row">
                <div className="col"><button onClick={()=> handleClick('7')}>7</button></div>
                <div className="col"><button onClick={()=> handleClick('8')}>8</button></div>
                <div className="col"><button onClick={()=> handleClick('9')}>9</button></div>
                <div className="col"><button onClick={()=> handleClick('/')}>/</button></div>
            </div><br />
            <div className="row">
                <div className="col"><button onClick={()=> handleClick('%')}>%</button></div>
                <div className="col"><button onClick={()=> handleClick('0')}>0</button></div>
                <div className="col"><button onClick={()=> handleClick('*')}>*</button></div>
                <div className="col"><button onClick={()=> handleClick('=')}>=</button></div>
            </div><br />
            <div className="row">
                <div className="col"><button onClick={()=>{setInput("")}}>clear</button></div>
            </div>
        </div>
        </>
    )
}

export default Calculator