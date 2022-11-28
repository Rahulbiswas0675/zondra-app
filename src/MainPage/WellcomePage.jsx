import React from 'react'
import WellcomeTask from '../Component/WellcomeTask'
function WellcomePage(props) {
  return (
    <div className="today-contanear" id="Today">
        <WellcomeTask taskupdate={props.taskupdates}/>
    </div>
  )
}

export default WellcomePage