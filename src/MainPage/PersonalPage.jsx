import React from 'react'
import PersonalTask from '../Component/PersonalTask';
function PersonalPage(props) {
  return (
    <div className="today-contanear" id="Today">
      <PersonalTask taskupdate={props.taskupdates}/>
    </div>
  )
}

export default PersonalPage;