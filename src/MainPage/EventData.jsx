import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../Component/LoginPage.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import evnt from '../Img/event.png'
function EventData(props) {
    const [local, setLocal] = useState();
    useEffect(() => {
        if (localStorage.getItem("Your Events")) {
            setLocal(JSON.parse(localStorage.getItem("Your Events")));
        } else {
            setLocal(false);
        }
    }, [props.eventsdatas]);
    return (
        <div>
            <Card style={{ width: '100%', backgroundColor: '#eee' }}>
                <Card.Body style={{ display: 'flex', flexDirection: 'column'}}>
                    <div className="NoteItem" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', height: '82vh', overflow: 'scroll', gap:'24px' }}>
                        {local ? local.map(item => (
                            <Card key={item.Id} style={{ width: '48%', backgroundColor: 'rgb(184, 236, 219)', height: '16rem', boxShadow:'2px 2px 2px light black'}}>
                                <Card.Img variant="top" src={evnt} style={{ width: '100%', height:'18vh' }} />
                                <p className="NoteItem" style={{fontWeight:'bolder', fontSize:'24px', marginBottom:'0px' ,height:'4.5rem', overflow:'scroll' }} >{item.Title}</p>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', backgroundColor:'#eee', padding:' 6px 20px', height:'2rem', }}>
                                    <p style={{fontWeight:'bold'}}>Date: {item.Date}</p>
                                    <p style={{fontWeight:'bold'}}>Time: {item.Time}</p>
                                </div>
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', padding: '8px' ,}}>
                                    <EditIcon className="bi bi-pencil-fill" />
                                    <DeleteIcon className="bi bi-trash-fill" />
                                </div>
                            </Card>
                        )) :
                            <Card style={{ height: '8rem', width: '100%', }}>
                                <Card.Body>
                                    <Card.Title>You Have  No Event</Card.Title>
                                    <Card.Text>Create Your New Event</Card.Text>
                                </Card.Body>
                            </Card>
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default EventData