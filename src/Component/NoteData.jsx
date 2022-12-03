import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import "./LoginPage.css";
import DeleteIcon from '@mui/icons-material/Delete';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Successmp3 from '../Sound/notification.mp3';
import deletemp3 from '../Sound/dlt.mp3';
import Worngmp3 from '../Sound/error.mp3';
import { NotificationContainer, NotificationManager } from 'react-notifications';

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
                NotificationManager.success('Success message', 'Copy Successful', 2000);
                success.autoplay = true;
                break;
            case 'warning':
                NotificationManager.warning('Warning message', 'Task Is Dues', 2000);
                wornging.autoplay = true;
                break;
            case 'error':
                NotificationManager.error('Delete message', 'Note Is deleted', 2000,);
                deleted.autoplay = true;
                break;
        };
    
    };
function NoteData(props) {
    const [date, setDate] = useState(new Date());
    const [currentdate, setCurrentdate] = useState(date.toLocaleDateString());
    const [local, setLocal] = useState();
    const delet_handle = (id) => {
        const local = JSON.parse(localStorage.getItem('Your Note'));
        for (let i = 0; i < local.length; i++) {
            if (local[i].Id == id) {
                local[i].Status = "Delete";
                local[i].Date = currentdate;
            }
        }
        localStorage.setItem("Your Note", JSON.stringify(local));
        createNotification('error');
        props.taskupdate(JSON.parse(localStorage.getItem('Your Note')).filter(today => (today.Status.includes('Delete'))).length);
    }
    const copy_handle=(id)=>{
        const local = JSON.parse(localStorage.getItem('Your Note'));
        for (let i = 0; i < local.length; i++) {
            if (local[i].Id == id) {
                navigator.clipboard.writeText(local[i].Subject);
            }
        }
        createNotification('success');
    }
    useEffect(() => {
        if (localStorage.getItem("Your Note")) {
            setLocal(JSON.parse(localStorage.getItem("Your Note")).filter(today => (today.Status.includes('Complete'))));
        }else{
            setLocal(false);
        }
    }, [props.fromdatas]);
    console.log(local)
    return (
        <div style={{ width: '50%' }}>
            <Card style={{ width: '100%', backgroundColor: '#eee', height: '97.8vh', }}>
                <Card.Body style={{ display: 'flex', flexDirection: 'column',}}>
                    <Card.Title>Your Note's</Card.Title>
                    <div className="NoteItem" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '16px', height: '88vh', overflow: 'scroll' }}>
                        {local ? local.map(item => (
                            <Card key={item.Id} style={{ width: '48%', height: '43vh', backgroundColor: 'rgb(184, 236, 219)', padding:'6px' }}>
                                <Card.Title style={{marginBottom:'0px'}}>{item.Title}</Card.Title>
                                <Card.Text className="NoteItem" style={{height: '34vh', overflow:'scroll',}}>{item.Subject}</Card.Text>
                                <div style={{position: 'absolute',display:'flex',justifyContent:'space-between', bottom: '5px', width:'95%',}}>
                                    <ContentCopyIcon className="bi bi-pencil-fill" onClick={() => copy_handle(item.Id)}/>
                                    <DeleteIcon className="bi bi-trash-fill" onClick={() => delet_handle(item.Id)} />
                                </div>
                            </Card>
                        )) :
                            <Card style={{ height: '8rem', width: '100%', }}>
                                <Card.Body>
                                    <Card.Title>You Have  No Notes</Card.Title>
                                    <Card.Text>Create Your New Notes</Card.Text>
                                </Card.Body>
                            </Card>
                        }
                    </div>
                </Card.Body>
            </Card>
            <NotificationContainer />
        </div>
    )
}

export default NoteData;
