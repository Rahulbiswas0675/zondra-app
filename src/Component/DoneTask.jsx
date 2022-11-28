import React from 'react';
import '../Pages/Home.css';
import edtimg from '../Img/Edit.svg';
import dltimg from '../Img/trash-.svg';
import { useState, useEffect } from 'react';
function DoneTask(props) {
    const [date, setDate] = useState(new Date());
    const [currentdate, setCurrentdate] = useState(date.toLocaleDateString());
    const [done, setDone] = useState();
    useEffect(() => {
            if (localStorage.getItem('Your Task')) {
                let localstoreg = JSON.parse(localStorage.getItem('Your Task'))
                let todaydata = localstoreg.filter(today => (today.Date.includes(currentdate)));
                let donedata = todaydata.filter(today => (today.Status.includes('Done')));
                if (donedata.length > 0) {
                    setDone(
                        donedata.map(items => (
                            <div className="task-item list-group-item-success">
                                <div className="task-data">
                                    <input type="checkbox" className="form-check-input" checked />
                                    {items.Task}
                                </div>
                                <div className="btn-cntnr">
                                    <div className="edit-btn">
                                        <img src={edtimg} className="bi bi-pencil-fill" />
                                    </div>
                                    <div className="remove-btn">
                                        <img src={dltimg} className="bi bi-trash-fill" />
                                    </div>
                                </div>
                            </div>
                        ))
                    );
                }else{
                    setDone(
                        <div className="Notask" id="Notask">
                            <p>You Have No Task For Today</p>
                            <p>Add Task</p>
                        </div>
                    );
                }
            } else{
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
        </>
    )
}

export default DoneTask;