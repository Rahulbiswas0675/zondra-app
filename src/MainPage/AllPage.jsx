import React from 'react'
import AllTask from '../Component/AllTask'
function AllPage(props) {
  return (
    <div className="today-contanear" id="Today">
      <AllTask taskupdate={props.taskupdates}/>
    </div>
  )
}

export default AllPage
