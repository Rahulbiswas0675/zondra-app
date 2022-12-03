import React, { useState } from 'react';
import NoteForm from '../Component/NoteForm';
import NoteData from '../Component/NoteData';
function NotePage() {
  const[data,setData]=useState();
  const fromdata = (value)=>{
    setData(value)
  }
  return (
    <div style={{ width: '82.2%', height:'100vh', padding:'8px', display:'flex', gap:'16px'}}>
        <NoteForm fromdatas={fromdata}/>
        <NoteData taskupdate={fromdata} fromdatas={data}  />
    </div>
  )
}

export default NotePage