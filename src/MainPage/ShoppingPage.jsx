import React from 'react'
import ShoppingTask from '../Component/ShoppingTask';
function ShoppingPage(props) {
  const getdata_handel=(value)=>{
    props.taskupdate(value)
  }
  return (
    <div className="today-contanear" id="Today">
      <ShoppingTask taskupdate={props.taskupdates} taskupdates={getdata_handel}/>
    </div>
  )
}

export default ShoppingPage;