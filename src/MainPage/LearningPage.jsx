import React from 'react';
import LerningTask from "../Component/LearningTask";
function LearningPage(props) {
    return (
        <div className="today-contanear" id="Today">
            <LerningTask taskupdate={props.taskupdates}/>
        </div>
    )
}

export default LearningPage;