import React from 'react';
import FitnessTask from '../Component/FitnessTask';
function FitnessPage(props) {
  const getdata_handel=(value)=>{
    props.taskupdate(value)
  }
  return (
    <div className="today-contanear" id="Today">
      <FitnessTask taskupdate={props.taskupdates} taskupdates={getdata_handel}/>
    </div>
  )
}
export default FitnessPage;