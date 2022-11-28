import React, { useEffect, useState } from 'react';
import Newsitem from '../Component/Newsitem';
import "./Home.css";
function News() {
    const[country,setCountry]=useState("in");
    const select_country = (event) => {
        setCountry(event.target.value);
    }
    return (
        <div className="newsPage">
            <div className="dropdown">
                <select onChange={select_country} className="select">
                    <option value="in">Country</option>
                    <option value="in">India</option>
                    <option value="us">USA</option>
                    <option value="gb">UK</option>
                    <option value="au">Australia</option>
                    <option value="pk">Pakistan</option>
                    <option value="ca">Canada</option>
                    <option value="jp">Japan</option>
                    <option value="de">Germany</option>
                    <option value="fr">France</option>
                    <option value="cn">China</option>
                    <option value="br">Brazil</option>
                </select>
            </div>
            <div className="news">
                <Newsitem/>
            </div>
        </div>
    )
}

export default News;
