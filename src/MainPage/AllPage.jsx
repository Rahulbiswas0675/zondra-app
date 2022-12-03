import React, { useState } from 'react'
import AllTask from '../Component/AllTask'
function AllPage(props) {
  const getdata_handel=(value)=>{
    props.taskupdate(value)
  }
  return (
    <div className="today-contanear" id="Today">
      <AllTask taskupdate={props.taskupdates} taskupdates={getdata_handel}/>
    </div>
  )
}
export default AllPage;
