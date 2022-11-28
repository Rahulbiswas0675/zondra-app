import React from 'react'
import ShoppingTask from '../Component/ShoppingTask';
function ShoppingPage(props) {
  return (
    <div className="today-contanear" id="Today">
      <ShoppingTask taskupdate={props.taskupdates}/>
    </div>
  )
}

export default ShoppingPage;