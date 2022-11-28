import React, { useState } from 'react';
import "../Component/LoginPage.css";
import logimg from "../Img/login.jpg";
import Login from "../Component/Login";
import Singin from '../Component/Singin';
function LoginPage(props) {
    const[statement,setStatement]=useState("Login");
    const logdata=(value)=>{
        props.logdatas(value);
    }
    const singupbtn=(value)=>{
        setStatement(value);
    }
    return (
        <div className="loginpage">
            <img src={logimg} alt="Background" className="backgroundimg" />
            {(statement === "Login") ? <Login logindata={logdata} sngstate={singupbtn} /> : <Singin regisdata={logdata} sngstate={singupbtn}/>}
        </div>
    )
}

export default LoginPage