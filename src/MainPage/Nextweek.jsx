import React from 'react'
import Next7day from '../Component/Next7day'
function Nextweek(props) {
  return (
    <div className="today-contanear" id="Today">
      <Next7day taskupdate={props.taskupdates}/>
    </div>
  )
}

export default Nextweek
