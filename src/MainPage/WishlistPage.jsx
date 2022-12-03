import React from 'react';
import Wishlist from "../Component/WishlistTask";

function WishlistPage(props) {
  const getdata_handel=(value)=>{
    props.taskupdate(value)
  }
  return (
    <div className="today-contanear" id="Today">
      <Wishlist taskupdate={props.taskupdates} taskupdates={getdata_handel}/>
    </div>
  )
}

export default WishlistPage