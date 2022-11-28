import Add_Task from "../Component/Add_Task";
import DuesTask from '../Component/DuesTask';
import DoneTask from '../Component/DoneTask';
import '../Pages/Home.css';
import { useState } from "react";
function Today(props) {
  const[taskupdate,setTaskupdate]=useState();
  const taskupdate_handeler=(value)=>{
    setTaskupdate(value);
    props.taskupdate(value);
  }

  return (
    <div className="today-contanear" id="Today">
      <Add_Task  taskupdate={taskupdate_handeler}/>
      <DuesTask taskupdates={taskupdate}/>
      <DoneTask taskupdates={taskupdate}/>
    </div>
  )
}
export default Today;