import React from 'react';
import Wishlist from "../Component/WishlistTask";

function WishlistPage(props) {
  return (
    <div className="today-contanear" id="Today">
      <Wishlist taskupdate={props.taskupdates}/>
    </div>
  )
}

export default WishlistPage