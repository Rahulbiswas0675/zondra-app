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
            NotificationManager.success('Success message', 'New Note Added', 2000);
            titelval = "New Note Added";
            success.autoplay = true;
            break;
        case 'warning':
            NotificationManager.warning('Warning message', 'Enter Your Note', 2000);
            titelval = "Enter Your Note";
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
function NoteForm(props) {
    const [title, setTitle] = useState();
    const [subject, setSubject] = useState();
    
    const title_handel = (e) => {
        setTitle(e.target.value);
    }
    const subject_handel = (e) => {
        setSubject(e.target.value);
    }
    const add_btn = () => {
        if (!title || !subject) {
            createNotification('warning');
        } else {
            if (localStorage.getItem('Your Note')) {
                let Note = JSON.parse(localStorage.getItem('Your Note'));
                let Notedata = {
                    Id: +(Note[Note.length - 1].Id) + 1,
                    Title: title,
                    Subject: subject
                }
                Note.push(Notedata);
                localStorage.setItem("Your Note", JSON.stringify(Note));
            } else {
                let Notedata = {
                    Id: 1,
                    Title: title,
                    Subject: subject
                }
                localStorage.setItem("Your Note", JSON.stringify([Notedata]));
            }
            setTitle('');
            setSubject('');
            createNotification('success');
            props.fromdatas(JSON.parse(localStorage.getItem('Your Note')).length);
        }
    }
    return (
        <div style={{ width: '50%' }}>
            <Card style={{ width: '100%', backgroundColor: '#eee', maxHeight: '76vh', minHeight: '97.8vh' }}>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <Card.Title>Create Your Note</Card.Title>
                    <input type="text" placeholder="Title" value={title} onChange={title_handel} />
                    <textarea type="text" placeholder="Subject" value={subject} onChange={subject_handel} style={{ maxHeight: '76vh', minHeight: '76vh' }} />
                    <Button onClick={add_btn}>Add</Button>
                </Card.Body>
            </Card>
            <NotificationContainer />
        </div>
    )
}
export default NoteForm;