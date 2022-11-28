import React from 'react';
import FitnessTask from '../Component/FitnessTask';
function FitnessPage(props) {
  return (
    <div className="today-contanear" id="Today">
      <FitnessTask taskupdate={props.taskupdates}/>
    </div>
  )
}
export default FitnessPage;