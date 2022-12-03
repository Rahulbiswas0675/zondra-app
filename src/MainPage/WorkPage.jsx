import React from 'react';
import WorkTask from '../Component/WorkTask';
function WorkPage(props) {
  const getdata_handel=(value)=>{
    props.taskupdate(value)
  }
  return (
    <div className="today-contanear" id="Today">
      <WorkTask taskupdate={props.taskupdates} taskupdates={getdata_handel}/>
    </div>
  )
}

export default WorkPage;
