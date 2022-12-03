import React from 'react';
import LerningTask from "../Component/LearningTask";
function LearningPage(props) {
    const getdata_handel=(value)=>{
        props.taskupdate(value)
      }
    return (
        <div className="today-contanear" id="Today">
            <LerningTask taskupdate={props.taskupdates} taskupdates={getdata_handel}/>
        </div>
    )
}

export default LearningPage;