import React, { useEffect, useState } from 'react';
import '../Pages/Home.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Successmp3 from '../Sound/notification.mp3';
import deletemp3 from '../Sound/dlt.mp3';
const createNotification = (type) => {
    const success = document.createElement("audio");
    success.src = Successmp3;

    const deleted = document.createElement("audio");
    deleted.src = deletemp3;

    switch (type) {
        case 'info':
            NotificationManager.info('Info message', 'Info Not Match', 2000);
            break;
        case 'success':
            NotificationManager.success('Success message', 'Task Is Complete', 2000);
            success.autoplay = true;
            break;
        case 'warning':
            NotificationManager.warning('Warning message', 'Enter Your Task', 2000);
            // wornging.autoplay = true;
            break;
        case 'error':
            NotificationManager.error('Delete message', 'Task Is deleted', 2000,);
            deleted.autoplay = true;
            break;
    };
};
function LearningTask(props) {
    const [dues, setDues] = useState();
    const delet_handle = (id) => {
        const local = JSON.parse(localStorage.getItem('Your Task'));
        for (let i = 0; i < local.length; i++) {
            if (local[i].Id == id) {
                local[i].Status = "Delete";
            }
        }
        localStorage.setItem("Your Task", JSON.stringify(local));
        createNotification('error');
        props.taskupdates(JSON.parse(localStorage.getItem('Your Task')).filter(today => (today.Status.includes('Dues'))).length);
    }
    const done_handle = (id) => {
        const local = JSON.parse(localStorage.getItem('Your Task'));
        for (let i = 0; i < local.length; i++) {
            if (local[i].Id == id) {
                local[i].Status = "Done";
            }
        }
        localStorage.setItem("Your Task", JSON.stringify(local));
        createNotification('success');
        props.taskupdates(JSON.parse(localStorage.getItem('Your Task')).filter(today => (today.Status.includes('Dues'))).length);
    }
    useEffect(() => {
        if (localStorage.getItem('Your Task')) {
            let localstoreg = JSON.parse(localStorage.getItem('Your Task'))
            let duesdata = localstoreg.filter(today => (today.Status.includes('Dues')));
            let learningdata = duesdata.filter(today => { return today.Tag == "Learning" });
            if (learningdata.length > 0) {
                setDues(
                    learningdata.map(items => (
                        <div className="task-item list-group-item-danger" key={items.Id}>
                            <div className="task-data">
                                <input type="checkbox" className="form-check-input" onClick={() => done_handle(items.Id)} />
                                {items.Task}
                            </div>
                            <div className="btn-cntnr">
                                <DeleteIcon className="bi bi-trash-fill" onClick={() => delet_handle(items.Id)} />
                            </div>
                        </div>
                    ))
                );
            } else {
                setDues(
                    <div className="Notask" id="Notask">
                        <p>You Have No Task</p>
                        <p>Add Task</p>
                    </div>
                );
            }
        } else {

            setDues(
                <div className="Notask" id="Notask">
                    <p>You Have No Task</p>
                    <p>Add Task</p>
                </div>
            );
        }
    }, [props.taskupdate]);
    return (
        <>
            <div className="ms-2 me-auto tagsdiv">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" disabled />
                <div className="fw-bold">Learning Task</div>
            </div>
            <div className="Taskcontenear alltask">
                <div className="task-list-div" id="Donetask">
                    {dues}
                </div>
            </div>
            <NotificationContainer />
        </>
    )
}

export default LearningTask;
