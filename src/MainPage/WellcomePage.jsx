import React from 'react'
import WellcomeTask from '../Component/WellcomeTask'
function WellcomePage(props) {
  const getdata_handel=(value)=>{
    props.taskupdate(value)
  }
  return (
    <div className="today-contanear" id="Today">
        <WellcomeTask taskupdate={props.taskupdates} taskupdates={getdata_handel}/>
    </div>
  )
}

export default WellcomePage