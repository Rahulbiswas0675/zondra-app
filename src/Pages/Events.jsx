import React, { useState } from 'react';
import EventForm from '../MainPage/EventForm';
import EventData from '../MainPage/EventData';

function Events() {
  const[evtval,setEntval]=useState();
  const event_handel=(value)=>{
    setEntval(value);
  }
  return (
    <div style={{ width: '82.2%', height:'100vh', padding:'8px', display:'flex', flexDirection:'column', gap:'8px'}}>
      <EventForm eventdatas={event_handel}/>
      <EventData eventsdatas={evtval}/>
    </div>
  )
}

export default Events
