import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Habit from './Pages/Habit';
import Events from './Pages/Events';
import Notes from './Pages/Notes';
import Profile from './Pages/Profile';
import Notify from './Pages/Notify';
import News from './Pages/News';
import About from './Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Img/zondra.png';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';

function App() {
    const[notiClass,setNotiClass]=useState(true);
    // ======================HTML=====================================
    return (
        <div className="0">
            <Router>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <img className="logoimg" src={Logo} />
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page"><Link to="/"><CheckBoxIcon /></Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to="/events"><CalendarMonthIcon /></Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to="/habit"><AccessAlarmsIcon /></Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to="/notes"><NoteAddIcon /></Link></a>
                                </li>
                            </ul>
                            <ul className="navbar-nav bottom me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page"><Link to="/profile"><AccountCircleIcon /></Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" onClick={()=> setNotiClass(!notiClass)}><Link to=""><NotificationsIcon /></Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><Link to="/about"><InfoIcon /></Link></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="boody">
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/events" element={<Events />}></Route>
                        <Route path="/habit" element={<Habit />}></Route>
                        <Route path="/notes" element={<Notes />}></Route>
                        <Route path="/profile" element={<Profile />}></Route>
                        <Route path="/about" element={<About />}></Route>
                    </Routes>
                </div>
            </Router>
            <div className="notify">
                {notiClass ? <News /> : <Notify />}
            </div>
        </div>
    );
}
export default App;
