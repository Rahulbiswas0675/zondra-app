import React from 'react'
import Next7day from '../Component/Next7day'
function Nextweek(props) {
  const getdata_handel=(value)=>{
    props.taskupdate(value)
  }
  return (
    <div className="today-contanear" id="Today">
      <Next7day taskupdate={props.taskupdates} taskupdates={getdata_handel}/>
    </div>
  )
}

export default Nextweek
