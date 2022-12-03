import React from 'react';
import '../Pages/Home.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useState, useEffect } from 'react';
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
            NotificationManager.success('Success message', 'Task Is Dues', 2000);
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
function DoneTask(props) {
    const [date, setDate] = useState(new Date());
    const [currentdate, setCurrentdate] = useState(date.toLocaleDateString());
    const [done, setDone] = useState();

    const delet_handle = (id) => {
        const local = JSON.parse(localStorage.getItem('Your Task'));
        for (let i = 0; i < local.length; i++) {
            if (local[i].Id == id) {
                local[i].Status = "Delete";
            }
        }
        localStorage.setItem("Your Task", JSON.stringify(local));
        props.taskupdate(JSON.parse(localStorage.getItem('Your Task')).filter(today => (today.Status.includes('Delete'))).length);
        createNotification('error');
    }
    const done_handle = (id) => {
        const local = JSON.parse(localStorage.getItem('Your Task'));
        for (let i = 0; i < local.length; i++) {
            if (local[i].Id == id) {
                local[i].Status = "Dues";
            }
        }
        localStorage.setItem("Your Task", JSON.stringify(local));
        createNotification('warning');
        props.taskupdate(JSON.parse(localStorage.getItem('Your Task')).filter(today => (today.Status.includes('Dues'))).length);
    }

    useEffect(() => {
        if (localStorage.getItem('Your Task')) {
            let localstoreg = JSON.parse(localStorage.getItem('Your Task'))
            let todaydata = localstoreg.filter(today => (today.Date.includes(currentdate)));
            let donedata = todaydata.filter(today => (today.Status.includes('Done')));
            if (donedata.length > 0) {
                setDone(
                    donedata.map(items => (
                        <div className="task-item list-group-item-success" key={items.Id}>
                            <div className="task-data">
                                <input type="checkbox" className="form-check-input" defaultChecked onClick={() => done_handle(items.Id)} />
                                {items.Task}
                            </div>
                            <div className="btn-cntnr">
                                <DeleteIcon className="bi bi-trash-fill" onClick={() => delet_handle(items.Id)} />
                            </div>
                        </div>
                    ))
                );
            } else {
                setDone(
                    <div className="Notask" id="Notask">
                        <p>You Have No Task For Today</p>
                        <p>Add Task</p>
                    </div>
                );
            }
        } else {
            setDone(
                <div className="Notask" id="Notask">
                    <p>You Have No Task For Today</p>
                    <p>Add Task</p>
                </div>
            );
        }
    }, [props.taskupdates]);
    return (
        <>
            <div className="ms-2 me-auto tagsdiv">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-check-square-fill" viewBox="0 0 16 16">
                    <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                </svg>
                <div className="fw-bold">Completed</div>
            </div>
            <div className="Taskcontenear">
                <div className="task-list-div" id="Donetask">
                    {done}
                </div>
            </div>
            <NotificationContainer />
        </>
    )
}

export default DoneTask;