import React from 'react'
import PersonalTask from '../Component/PersonalTask';
function PersonalPage(props) {
  const getdata_handel=(value)=>{
    props.taskupdate(value)
  }
  return (
    <div className="today-contanear" id="Today">
      <PersonalTask taskupdate={props.taskupdates} taskupdates={getdata_handel}/>
    </div>
  )
}

export default PersonalPage;