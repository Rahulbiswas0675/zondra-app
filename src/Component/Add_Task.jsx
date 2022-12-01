import React, { useEffect, useState } from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import '../Pages/Home.css';
import AddTaskIcon from '@mui/icons-material/AddTask';
import Successmp3 from '../Sound/notification.mp3';
import Worngmp3 from '../Sound/error.mp3';
function Add_Task(props) {
    // Date And Time Setup===========================
    const [date, setDate] = useState(new Date());
    const [currentdate, setCurrentdate] = useState(date.toLocaleDateString());
    const [time, setTime] = useState();
    const [timezone, setTimezon] = useState();
    // ==================================================
    const [taskvalue, setTaskvalue] = useState('');
    const [taskdate, setTaskdate] = useState(false);
    const [tasktag, setTasktag] = useState('None');
    const [taskstatus, setTaskstatus] = useState('Dues');
    const createNotification = (type) => {
        const success = document.createElement("audio");
        success.src = Successmp3;

        const wornging = document.createElement("audio");
        wornging.src = Worngmp3;

        let titelval;
        let descriptionvalue;
        switch (type) {
            case 'info':
                NotificationManager.info('Info message', 'Info Not Match', 2000);
                titelval = "Info Not Match";
                descriptionvalue = "The description of a information not match.";
                break;
            case 'success':
                NotificationManager.success('Success message', 'New Task Added', 2000);
                titelval = "New Task Added";
                descriptionvalue = taskvalue;
                success.autoplay = true;
                break;
            case 'warning':
                NotificationManager.warning('Warning message', 'Enter Your Task', 2000);
                titelval = "Enter Your Task";
                descriptionvalue = "The description of a warning for input fild is empty.";
                wornging.autoplay = true;
                break;
            case 'error':
                NotificationManager.error('Error message', 'Task Is delete', 2000,);
                titelval = "Task Is Delete";
                descriptionvalue = "The description of a deleted task.";
                break;
        };
        // ================INBOX==========
        if (type === 'success') {
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

    useEffect(() => {
        setInterval(() => {
            let dates = new Date();
            setTime(dates.toLocaleString().split(' ')[1]);
            setTimezon(dates.toLocaleString().split(' ')[2]);
        }, 1000);
    }, []);

    // Add-Task-Button===================
    const TaskBar = document.getElementById("taskbar");
    const addTask_Btn = () => {
        TaskBar.classList.toggle("form");
    }

    const taskinput = (event) => {
        setTaskvalue(event.target.value);
    }
    const dateinput = (event) => {
        setTaskdate(event.target.value);
    }
    const taginput = (event) => {
        setTasktag(event.target.value)
    }

    const add_btn = () => {
        if (taskvalue === "") {
            createNotification('warning');
        } else {
            let datevalue;
            if (!taskdate) {
                datevalue = currentdate;
            } else {
                datevalue = new Date(taskdate).toLocaleString().split(',')[0];
            }
            if (localStorage.getItem('Your Task')){
                let Task = JSON.parse(localStorage.getItem('Your Task'));
                let Taskdata = {
                    Id: +(Task[Task.length - 1].Id) + 1,
                    Task: taskvalue,
                    Tag: tasktag,
                    Date: datevalue,
                    Status: taskstatus
                }
                Task.push(Taskdata);
                localStorage.setItem("Your Task", JSON.stringify(Task))
            } else {
                let Taskdata = {
                    Id: 1,
                    Task: taskvalue,
                    Tag: tasktag,
                    Date: datevalue,
                    Status: taskstatus
                }
                localStorage.setItem("Your Task", JSON.stringify([Taskdata]));
            }
            createNotification('success');
            setTaskvalue('')
            props.taskupdate(JSON.parse(localStorage.getItem('Your Task')).length);
        }
    }

    return (
        <>
            <div className="todaybar">
                <div className="left fw-bold">
                    <div className="fw-bold">Today</div>
                </div>
                <div className="right fw-bold">
                    <div className="add-btn" onClick={addTask_Btn}>
                        <AddTaskIcon className="add-btnicon" />
                    </div>
                    <div className="fw-bold" id="Datediv">Date: {currentdate}</div>
                    <div className="fw-bold" id="Timediv">Time: {time} {timezone}</div>
                </div>
            </div>

            <div className="form-hide" id="taskbar">
                <div className="input-group group-input">
                    <input type="text" className="input" placeholder="Enter Your Task" onChange={taskinput} value={taskvalue} />
                    <input type="date" id="datefild" className="selects" onChange={dateinput} />
                    <select className="selects" id="selecttag" onChange={taginput}>
                        <option value="Rendom">Select Tag</option>
                        <option value="Welcome">Welcome</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        <option value="Shopping">Shopping</option>
                        <option value="Learning">Learning</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Wish List">Wish List</option>
                    </select>
                    <button type="button" className="btn btn-outline-info addbtn"
                        onClick={add_btn}>Add</button>
                </div>
            </div>
            <NotificationContainer />
        </>
    )
}

export default Add_Task;