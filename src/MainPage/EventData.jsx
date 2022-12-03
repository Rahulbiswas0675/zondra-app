import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Component/LoginPage.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import evnt from '../Img/event.png'
import Successmp3 from '../Sound/notification.mp3';
import Worngmp3 from '../Sound/error.mp3';
import deletemp3 from '../Sound/dlt.mp3';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const createNotification = (type) => {
    const success = document.createElement("audio");
    success.src = Successmp3;

    const wornging = document.createElement("audio");
    wornging.src = Worngmp3;

    const deleted = document.createElement("audio");
    deleted.src = deletemp3;

    switch (type) {
        case 'info':
            NotificationManager.info('Info message', 'Info Not Match', 2000);
            break;
        case 'success':
            NotificationManager.success('Success message', 'New Event Added', 2000);
            success.autoplay = true;
            break;
        case 'warning':
            NotificationManager.warning('Warning message', 'Enter Your Events', 2000);
            wornging.autoplay = true;
            break;
        case 'error':
            NotificationManager.error('Error message', 'Event Is delete', 2000,);
            deleted.autoplay = true;
            break;
    };
};
function EventData(props) {
    const [local, setLocal] = useState();
    const delet_handle = (id) => {
        const curdate = new Date();
        const todate = curdate.toLocaleDateString();
        const local = JSON.parse(localStorage.getItem('Your Events'));
        for (let i = 0; i < local.length; i++) {
            if (local[i].Id === id) {
                local[i].Status = "Delete";
                local[i].Date = todate
            }
        }
        localStorage.setItem("Your Events", JSON.stringify(local));
        createNotification('error');
        props.taskupdate(JSON.parse(localStorage.getItem('Your Events')).filter(today => (today.Status.includes('Delete'))).length);
      }
    useEffect(() => {
        if (localStorage.getItem("Your Events")) {
            let localstore = JSON.parse(localStorage.getItem("Your Events"));
            let notedatas = localstore.filter(today => (today.Status.includes('Complete')));
            if (notedatas){
                setLocal(
                    notedatas.map(item => (
                        <Card key={item.Id} style={{ width: '48%', backgroundColor: 'rgb(184, 236, 219)', height: '16rem', boxShadow: '2px 2px 2px light black' }}>
                            <Card.Img variant="top" src={evnt} style={{ width: '100%', height: '18vh' }} />
                            <p className="NoteItem" style={{ fontWeight: 'bolder', fontSize: '24px', marginBottom: '0px', height: '4.5rem', overflow: 'scroll' }} >{item.Title}</p>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', backgroundColor: '#eee', padding: ' 6px 20px', height: '2rem', }}>
                                <p style={{ fontWeight: 'bold' }}>Date: {item.Date}</p>
                                <p style={{ fontWeight: 'bold' }}>Time: {item.Time}</p>
                            </div>
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', padding: '8px', }}>
                                <EditIcon className="bi bi-pencil-fill" />
                                <DeleteIcon className="bi bi-trash-fill" onClick={() => delet_handle(item.Id)}/>
                            </div>
                        </Card>
                    ))
                );
            } else {
                setLocal(null);
            }

        } else {
            setLocal(
                <Card style={{ height: '8rem', width: '100%', }}>
                    <Card.Body>
                        <Card.Title>You Have  No Event</Card.Title>
                        <Card.Text>Create Your New Event</Card.Text>
                    </Card.Body>
                </Card>
            )
        }
    }, [props.eventsdatas]);
    return (
        <div>
            <Card style={{ width: '100%', backgroundColor: '#eee' }}>
                <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className="NoteItem" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', height: '82vh', overflow: 'scroll', gap: '24px' }}>
                        {local}
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default EventData