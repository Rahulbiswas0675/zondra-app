import React, { useState } from 'react';
import Botimg from "../Img/bot.png";
function Bot() {
    const[heading,setHeading]=useState("ON ME");
    const zondra_AI=()=>{
        if(heading === "ON ME"){
            setHeading("OFF ME")
        }else{
            setHeading("ON ME")
        }
    }
    return (
        <div className="newsPage">
            <div className="aii" style={{ width: '98%', textAlign: 'center', position: 'absolute', bottom: '0px' }}>
                <img src={Botimg} style={{ width: '7rem', cursor: 'pointer' }} alt="Zondra Bot" onClick={zondra_AI}/>
                <p>{heading}</p>
            </div>
        </div>
    )
}

export default Bot;