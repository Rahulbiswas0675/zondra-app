import React from 'react';
import BirthdayTask from "../Component/BirthdayTask";
function BirthdaywishPage(props) {
  const getdata_handel=(value)=>{
    props.taskupdate(value)
  }
  return (
    <div className="today-contanear" id="Today">
      <BirthdayTask taskupdate={props.taskupdates} taskupdates={getdata_handel}/>
    </div>
  )
}

export default BirthdaywishPage;