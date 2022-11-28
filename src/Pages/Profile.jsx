import React, { useEffect, useState } from 'react';
import UserProfile from '../Component/UserProfile';
import "../Component/UserProfile.css";
import LoginPage from '../MainPage/LoginPage';
function Profile() {
  const[localstoredata,setLocalstoredata]=useState();
  const[logdata,setLogdata]=useState(false);
  useEffect(()=>{
    if(localStorage.getItem('User') == null){
      setLocalstoredata(false)
    }else{
      setLocalstoredata(true)
    }
  },[logdata])

  const logvalue=(value)=>{
    setLogdata(value);
  }
  return (
    <div className="0">
      {localstoredata ? <UserProfile logdatas={logvalue}/> : <LoginPage logdatas={logvalue}/>}
    </div>
  )
}

export default Profile;