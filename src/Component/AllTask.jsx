import React from 'react';
import '../Pages/Home.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Successmp3 from '../Sound/notification.mp3';
import deletemp3 from '../Sound/dlt.mp3';
import { useState, useEffect } from 'react';

const createNotification = (type) => {
    const success = document.createElement("audio");
    success.src = Successmp3;

    const deleted = document.createElement("audio");
    deleted.src = deletemp3;

    let titelval;
    let descriptionvalue;
    switch (type) {
        case 'info':
            NotificationManager.info('Info message', 'Info Not Match', 2000);
            titelval = "Info Not Match";
            descriptionvalue = "The description of a information not match.";
            break;
        case 'success':
            NotificationManager.success('Success message', 'Task Is Complete', 2000);
            titelval = "Task Is Complete";
            success.autoplay = true;
            break;
        case 'warning':
            NotificationManager.warning('Warning message', 'Enter Your Task', 2000);
            titelval = "Enter Your Task";
            descriptionvalue = "The description of a warning for input fild is empty.";
            // wornging.autoplay = true;
            break;
        case 'error':
            NotificationManager.error('Delete message', 'Task Is deleted', 2000,);
            titelval = "Task Is Deleted";
            descriptionvalue = "The description of a deleted task.";
            deleted.autoplay = true;
            break;
    };
    // ================INBOX==========
    if (type === 'error') {
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
function AllTask(props) {
    const [alltask, setAlltask] = useState();

    const delet_handle = (id) => {
        const local = JSON.parse(localStorage.getItem('Your Task'));
        for (let i = 0; i < local.length; i++) {
            if (local[i].Id == id) {
                local[i].Status = "Delete";
            }
        }
        localStorage.setItem("Your Task", JSON.stringify(local));
        props.taskupdates(JSON.parse(localStorage.getItem('Your Task')).filter(today => (today.Status.includes('Dues'))).length);
        createNotification('error');
    }
    const done_handle = (id) => {
        const local = JSON.parse(localStorage.getItem('Your Task'));
        for (let i = 0; i < local.length; i++) {
            if (local[i].Id == id) {
                local[i].Status = "Done";
            }
        }
        localStorage.setItem("Your Task", JSON.stringify(local));
        props.taskupdates(JSON.parse(localStorage.getItem('Your Task')).filter(today => (today.Status.includes('Dues'))).length);
        createNotification('success');
    }
    useEffect(() => {
        if (localStorage.getItem('Your Task')) {
            let localstoreg = JSON.parse(localStorage.getItem('Your Task'));
            let duesdata = localstoreg.filter(today => (today.Status.includes('Dues')));
            setAlltask(
                duesdata.map(items => (
                    <div className="task-item list-group-item-danger" key={items.Id}>
                        <div className="task-data">
                            <input type="checkbox" className="form-check-input"  onClick={() => done_handle(items.Id)} />
                            {items.Task}
                        </div>
                        <div className="btn-cntnr">
                            <DeleteIcon className="bi bi-trash-fill" onClick={() => delet_handle(items.Id)}/>
                        </div>
                    </div>
                ))
            );
        } else {
            setAlltask(
                <div className="Notask" id="Notask">
                    <p>You Have No Task</p>
                    <p>Add Task</p>
                </div>
            );
        }
    }, [props.taskupdate])
    return (
        <>
            <div className="ms-2 me-auto tagsdiv">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-check-square-fill" viewBox="0 0 16 16">
                    <path
                        d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
                </svg>
                <div className="fw-bold">All Task</div>
            </div>
            <div className="Taskcontenear alltask">
                <div className="task-list-div" id="Donetask">
                    {alltask}
                </div>
            </div>
            <NotificationContainer />
        </>
    )
}

export default AllTask;
