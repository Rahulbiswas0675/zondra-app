import React from 'react';
import BirthdayTask from "../Component/BirthdayTask";
function BirthdaywishPage(props) {
  return (
    <div className="today-contanear" id="Today">
      <BirthdayTask taskupdate={props.taskupdates}/>
    </div>
  )
}

export default BirthdaywishPage;