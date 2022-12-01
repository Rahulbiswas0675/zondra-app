import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Successmp3 from '../Sound/notification.mp3';
import Worngmp3 from '../Sound/error.mp3';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const createNotification = (type) => {
    const success = document.createElement("audio");
    success.src = Successmp3;

    const wornging = document.createElement("audio");
    wornging.src = Worngmp3;

    let titelval;
    let descriptionvalue;
    switch (type) {
        case 'info':
            NotificationManager.info('Info message', 'Info Not Match', 2000);
            titelval = "Info Not Match";
            descriptionvalue = "The description of a information not match.";
            break;
        case 'success':
            NotificationManager.success('Success message', 'New Event Added', 2000);
            titelval = "New Event Added";
            success.autoplay = true;
            break;
        case 'warning':
            NotificationManager.warning('Warning message', 'Enter Your Events', 2000);
            titelval = "Enter Your Events";
            descriptionvalue = "The description of a warning for input fild is empty.";
            wornging.autoplay = true;
            break;
        case 'error':
            NotificationManager.error('Error message', 'Task Is delete', 2000,);
            titelval = "Task Is Delete";
            descriptionvalue = "The description of a deleted task.";
            break;
    };
    // ================INBOX==========
    if (type === 'success') {
        if (localStorage.getItem('Inbox')) {
            let Task = JSON.parse(localStorage.getItem('Inbox'));
            let Taskdata = {
                Id: +(Task[Task.length - 1].Id) + 1,
                Titel: titelval,
                description: descriptionvalue,
            }
            Task.push(Taskdata);
            localStorage.setItem("Inbox", JSON.stringify(Task))
        } else {
            let Taskdata = {
                Id: 1,
                Titel: titelval,
                description: descriptionvalue,
            }
            localStorage.setItem("Inbox", JSON.stringify([Taskdata]));
        }
    }

};
function EventForm(props) {
    const [title, setTitle] = useState();
    const [date, setDate] = useState();
    const [time,setTime]=useState();
    
    const title_handel = (e) => {
        setTitle(e.target.value);
    }
    const time_handeler=(e)=>{
        setTime(e.target.value);
    }
    const date_handel = (e) => {
        setDate(e.target.value);
    }
    const add_btn = () => {
        if (!title || !date) {
            createNotification('warning');
        } else {
            if (localStorage.getItem('Your Events')) {
                let Note = JSON.parse(localStorage.getItem('Your Events'));
                let Notedata = {
                    Id: +(Note[Note.length - 1].Id) + 1,
                    Title: title,
                    Date: date,
                    Time:time
                }
                Note.push(Notedata);
                localStorage.setItem("Your Events", JSON.stringify(Note));
            } else {
                let Notedata = {
                    Id: 1,
                    Title: title,
                    Date: date,
                    Time:time
                }
                localStorage.setItem("Your Events", JSON.stringify([Notedata]));
            }
            setTitle('');
            setDate('');
            createNotification('success');
            props.eventdatas(JSON.parse(localStorage.getItem('Your Events')).length);
        }
    }
    return (
        <div style={{ width: '100%' }}>
            <Card style={{ width: '100%', backgroundColor: '#eee',}}>
                <Card.Body style={{ display: 'flex', gap: '8px', justifyContent:'space-between', alignItems:'center' }}>
                    <label style={{ width:'15%',fontWeight:'bolder'}}>Create Events</label>
                    <input type="text" placeholder="Title" value={title} onChange={title_handel} style={{width:'45%'}} />
                    <input type="time" placeholder="Time"value={time} onChange={time_handeler}/>
                    <input type="date" placeholder="Date" value={date} onChange={date_handel}/>
                    <Button onClick={add_btn} style={{width:'15%'}}>Add</Button>
                </Card.Body>
            </Card>
            <NotificationContainer />
        </div>
    )
}

export default EventForm