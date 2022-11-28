import React, { useEffect, useState } from 'react';
import '../Pages/Home.css';
import edtimg from '../Img/Edit.svg';
import dltimg from '../Img/trash-.svg';
function WishlistTask(props) {
    const [dues, setDues] = useState();
    useEffect(() => {
        if (localStorage.getItem('Your Task')) {
            let localstoreg = JSON.parse(localStorage.getItem('Your Task'))
            let duesdata = localstoreg.filter(today => (today.Status.includes('Dues')));
            let wishlistdata = duesdata.filter(today => { return today.Tag == "Wish List" });
            if (wishlistdata.length > 0) {
                setDues(
                    wishlistdata.map(items => (
                        <div className="task-item list-group-item-danger" key={items.Id}>
                            <div className="task-data">
                                <input type="checkbox" className="form-check-input" />
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
                <div className="fw-bold">Wish List Task</div>
            </div>
            <div className="Taskcontenear alltask">
                <div className="task-list-div" id="Donetask">
                    {dues}
                </div>
            </div>
        </>
    )
}

export default WishlistTask;
