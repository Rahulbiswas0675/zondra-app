import React from 'react';
import WorkTask from '../Component/WorkTask';
function WorkPage(props) {
  return (
    <div className="today-contanear" id="Today">
      <WorkTask taskupdate={props.taskupdates}/>
    </div>
  )
}

export default WorkPage;
