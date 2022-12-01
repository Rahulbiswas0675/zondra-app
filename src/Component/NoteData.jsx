import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./LoginPage.css";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function NoteData(props) {
    const [local, setLocal] = useState();
    useEffect(() => {
        if (localStorage.getItem("Your Note")) {
            setLocal(JSON.parse(localStorage.getItem("Your Note")));
        } else {
            setLocal(false);
        }
    }, [props.fromdatas]);
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
                                    <EditIcon className="bi bi-pencil-fill" />
                                    <DeleteIcon className="bi bi-trash-fill" />
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
        </div>
    )
}

export default NoteData;
