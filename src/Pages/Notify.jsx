import React, { useEffect, useState } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Successmp3 from '../Sound/notification.mp3';
import deletemp3 from '../Sound/dlt.mp3';
import Worngmp3 from '../Sound/error.mp3';
const createNotification = (type) => {
  const success = document.createElement("audio");
  success.src = Successmp3;

  const deleted = document.createElement("audio");
  deleted.src = deletemp3;

  const wornging = document.createElement("audio");
  wornging.src = Worngmp3;

  switch (type) {
      case 'info':
          NotificationManager.info('Info message', 'Info Not Match', 2000);
          break;
      case 'success':
          NotificationManager.success('Success message', 'Undo Successfull', 2000);
          success.autoplay = true;
          break;
      case 'warning':
          NotificationManager.warning('Warning message', 'Task Is Dues', 2000);
          wornging.autoplay = true;
          break;
      case 'error':
          NotificationManager.error('Delete message', 'Task Is deleted', 2000,);
          deleted.autoplay = true;
          break;
  };
};
function Notify(props) {
  const [eventdata, setEventdata] = useState();
  const [notedata, setNotedata] = useState();
  const [date, setDate] = useState(new Date());
  const [currentdate, setCurrentdate] = useState(date.toLocaleDateString());
  useEffect(() => {
    if (localStorage.getItem("Your Note")) {
      let localstore = JSON.parse(localStorage.getItem("Your Note"));
      let todaydata = localstore.filter(today => (today.Date.includes(currentdate)));
      if (todaydata) {
        let notedatas = localstore.filter(today => (today.Status.includes('Delete')));
        setNotedata(
          notedatas.map(items => (
            <Stack sx={{ width: '100%' }} spacing={2} key={items.Id}>
              <Alert severity="error" action={<Button color="inherit" size="small" onClick={() => noteundo_handle(items.Id)}>UNDO</Button>}>Deleted Note Is {items.Title}</Alert>
            </Stack>
          ))
        )
      }else{
        setNotedata(null);
      }
    }
    if(localStorage.getItem("Your Events")){
      let localstore = JSON.parse(localStorage.getItem("Your Events"));
      let todaydata = localstore.filter(today => (today.Date.includes(currentdate)));
      if (todaydata){
        let notedatas = localstore.filter(today => (today.Status.includes('Delete')));
        setEventdata(
          notedatas.map(items => (
            <Stack sx={{ width: '100%' }} spacing={2} key={items.Id}>
              <Alert severity="error" action={<Button color="inherit" size="small" onClick={() => eventundo_handle(items.Id)}>UNDO</Button>}>Deleted Event Is {items.Title}</Alert>
            </Stack>
          ))
        )
      }else{
        setEventdata(null);
      }
    }
  }, [props.taskupdates])
  const noteundo_handle = (id) => {
    const local = JSON.parse(localStorage.getItem('Your Note'));
    for (let i = 0; i < local.length; i++) {
        if (local[i].Id == id) {
            local[i].Status = "Complete";
        }
    }
    localStorage.setItem("Your Note", JSON.stringify(local));
    createNotification('success');
    props.taskupdate(JSON.parse(localStorage.getItem('Your Note')).filter(today => (today.Status.includes('Delete'))).length);
  }
  const eventundo_handle = (id) => {
    const local = JSON.parse(localStorage.getItem('Your Events'));
    for (let i = 0; i < local.length; i++) {
        if (local[i].Id == id) {
            local[i].Status = "Complete";
        }
    }
    localStorage.setItem("Your Events", JSON.stringify(local));
    createNotification('success');
    props.taskupdate(JSON.parse(localStorage.getItem('Your Events')).filter(today => (today.Status.includes('Delete'))).length);
  }
  return (
    <div className="newsPage" style={{overflow:'scroll', display:'flex', flexDirection:'column', gap:'4px' }}>
      <div style={{width:'100%',height:'2rem', textAlign:'center',padding:'4px', fontWeight:'bold'}}>
        <p>Notification</p>
      </div>
      {eventdata}
      {notedata}
      <NotificationContainer />
    </div>
  )
}

export default Notify;
