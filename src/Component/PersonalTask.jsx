import React, { useEffect, useState } from 'react'
import '../Pages/Home.css';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
function PersonalTask(props) {
    const [dues, setDues] = useState();
    useEffect(() => {
        if (localStorage.getItem('Your Task')) {
            let localstoreg = JSON.parse(localStorage.getItem('Your Task'))
            let duesdata = localstoreg.filter(today => (today.Status.includes('Dues')));
            let personaldata = duesdata.filter(today => { return today.Tag == "Personal" });
            if (personaldata.length > 0) {
                setDues(
                    personaldata.map(items => (
                        <div className="task-item list-group-item-danger" key={items.Id}>
                            <div className="task-data">
                                <input type="checkbox" className="form-check-input" />
                                {items.Task}
                            </div>
                            <div className="btn-cntnr">
                                <EditIcon className="bi bi-pencil-fill" />
                                <DeleteIcon className="bi bi-trash-fill" />
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
                <div className="fw-bold">Personal Task</div>
            </div>
            <div className="Taskcontenear alltask">
                <div className="task-list-div" id="Donetask">
                    {dues}
                </div>
            </div>
        </>
    )
}

export default PersonalTask