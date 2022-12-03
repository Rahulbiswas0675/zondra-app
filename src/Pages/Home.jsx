import React, { useEffect, useState } from "react";
import './Home.css';

import Allpage from "../MainPage/AllPage";
import Todaypage from '../MainPage/Today';
import Nextweek from "../MainPage/Nextweek";
import WellcomePage from "../MainPage/WellcomePage";
import WorkPage from "../MainPage/WorkPage";
import PersonalPage from "../MainPage/PersonalPage";
import ShoppingPage from "../MainPage/ShoppingPage";
import LearningPage from "../MainPage/LearningPage";
import FitnessPage from "../MainPage/FitnessPage";
import BirthdaywishPage from "../MainPage/BirthdaywishPage";
import WishlistPage from "../MainPage/WishlistPage";
import CompletePage from "../MainPage/CompletePage";
import TrashPage from "../MainPage/TrashPage";
import SummaryPage from "../MainPage/SummaryPage";

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import DeleteIcon from '@mui/icons-material/Delete';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TodayIcon from '@mui/icons-material/Today';
import ListAltIcon from '@mui/icons-material/ListAlt';

function Home() {
  const[div,setDiv]=useState("Todaypage");
  const [todaynotify, setTodaynotify]=useState();
  const[allnotify,setAllnotify]=useState();
  const[nextnotify,setNextnotify]=useState();
  const[welcomnotify,setWelcomnotify]=useState();
  const[worknotify,setWorknotify]=useState();
  const[personenotify,setPerssonenotify]=useState();
  const[shopingnotify,setShopingnotify]=useState();
  const[learningnotify,setLearningnotify]=useState();
  const[fitnessnotify,setFitnessnotify]=useState();
  const[birthdaynotify,setBirthdaynotify]=useState();
  const[wishnotify,setWishnotify]=useState();

  const [date, setDate] = useState(new Date());
  const [currentdate, setCurrentdate] = useState(date.toLocaleDateString());
  const[taskupdate,setTaskupdate]=useState();
  // ==========================Clock-Function==========================================
  useEffect(()=>{
    if(localStorage.getItem('Your Task') != null){
      let localstoreg = JSON.parse(localStorage.getItem('Your Task'))
      let todaydata = localstoreg.filter(today => (today.Date.includes(currentdate)));
      let tddatalnt = todaydata.filter(today => (today.Status.includes('Dues')));
      let duesdata = localstoreg.filter(today => (today.Status.includes('Dues')));

      // let next = localstoreg.filter(data=> data.Date >= currentdate);
      let newdate = new Date();
      let dates = newdate.getDate()+7;
      let months = newdate.getMonth()+1;
      let years = newdate.getFullYear();
      let findate = `${months}/${dates}/${years}`;
      let next = localstoreg.filter(today => {return today.Date > currentdate || today.Date <= findate});
      let nextdate = next.filter(today => (today.Status.includes('Dues')));
      
      let wellcomedata = duesdata.filter(today => { return today.Tag == "Welcome" });
      let workdata = duesdata.filter(today => { return today.Tag == "Work" });
      let personaldata = duesdata.filter(today =>{return today.Tag == "Personal"});
      let shoppingdata = duesdata.filter(today => { return today.Tag == "Shopping" });
      let learningdata = duesdata.filter(today => { return today.Tag == "Learning" });
      let fitnessdata = duesdata.filter(today => { return today.Tag == "Fitness" });
      let birthdaydata = duesdata.filter(today => { return today.Tag == "Birthday" });
      let wishlistdata = duesdata.filter(today => { return today.Tag == "Wish List" });

      setTodaynotify(tddatalnt.length);
      setAllnotify(duesdata.length);
      setNextnotify(nextdate.length);
      setWelcomnotify(wellcomedata.length);
      setWorknotify(workdata.length);
      setPerssonenotify(personaldata.length);
      setShopingnotify(shoppingdata.length);
      setLearningnotify(learningdata.length);
      setFitnessnotify(fitnessdata.length);
      setBirthdaynotify(birthdaydata.length);
      setWishnotify(wishlistdata.length);
    }
      
  },[taskupdate]);
  
  const taskupdate_handeler=(value)=>{
    setTaskupdate(value);
  }
  // =================================Function==========================================
  return (
    <div className="Page-body">
        <div className="leftside">
          <ul className="list">
            <div className="ms-2 me-auto tagsdiv">
              <div className="fw-bold">Task</div>
            </div>
            <a onClick={()=>{setDiv("Todaypage")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              <TodayIcon />
              <div className="ms-2 me-auto">
                <div className="fw-bold">Today</div>
              </div>
              <span className="badge bg-primary rounded-pill" id="todaytask">{todaynotify}</span>
            </a>
            <a onClick={()=>{setDiv("Allpage")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              <ListAltIcon />
              <div className="ms-2 me-auto">
                <div className="fw-bold">All</div>
              </div>
              <span className="badge bg-primary rounded-pill" id="inbox">{allnotify}</span>
            </a>
            <a onClick={()=>{setDiv("Nextweek")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              <CalendarMonthIcon />
              <div className="ms-2 me-auto">
                <div className="fw-bold">Next 7 Days</div>
              </div>
              <span className="badge bg-primary rounded-pill" id="upcoming">{nextnotify}</span>
            </a>
          </ul>
          <div className="ms-2 me-auto tagsdiv">
            <div className="fw-bold">Tags</div>
          </div>
          <ul className="list2">
            <a onClick={()=>{setDiv("WellcomePage")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              &#128591;
              <div className="ms-2 me-auto">
                <div className="fw-bold">Welcome</div>
              </div>
              <span className="badge bg-primary rounded-pill" id="todaytask">{welcomnotify}</span>
            </a>
            <a onClick={()=>{setDiv("WorkPage")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              &#128188;
              <div className="ms-2 me-auto">
                <div className="fw-bold">Work</div>
              </div>
              <span className="badge bg-primary rounded-pill" id="todaytask">{worknotify}</span>
            </a>
            <a onClick={()=>{setDiv("PersonalPage")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              &#128583;
              <div className="ms-2 me-auto">
                <div className="fw-bold">Personal</div>
              </div>
              <span className="badge bg-primary rounded-pill" id="todaytask">{personenotify}</span>
            </a>
            <a onClick={()=>{setDiv("ShoppingPage")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              &#128722;
              <div className="ms-2 me-auto">
                <div className="fw-bold">Shopping</div>
              </div>
              <span className="badge bg-primary rounded-pill" id="todaytask">{shopingnotify}</span>
            </a>
            <a onClick={()=>{setDiv("LearningPage")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              &#128214;
              <div className="ms-2 me-auto">
                <div className="fw-bold">Learning</div>
              </div>
              <span className="badge bg-primary rounded-pill" id="todaytask">{learningnotify}</span>
            </a>
            <a onClick={()=>{setDiv("FitnessPage")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              &#127947;
              <div className="ms-2 me-auto">
                <div className="fw-bold">Fitness</div>
              </div>
              <span className="badge bg-primary rounded-pill" id="todaytask">{fitnessnotify}</span>
            </a>
            <a onClick={()=>{setDiv("BirthdaywishPage")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              &#127874;
              <div className="ms-2 me-auto">
                <div className="fw-bold">Birthday</div>
              </div>
              <span className="badge bg-primary rounded-pill" id="todaytask">{birthdaynotify}</span>
            </a>
            <a onClick={()=>{setDiv("WishlistPage")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              &#128525;
              <div className="ms-2 me-auto">
                <div className="fw-bold">Wish List</div>
              </div>
              <span className="badge bg-primary rounded-pill" id="todaytask">{wishnotify}</span>
            </a>
          </ul>
          <ul className="list">
            <div className="ms-2 me-auto tagsdiv">
              <div className="fw-bold">History</div>
            </div>
            <a onClick={()=>{setDiv("CompletePage")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              <TaskAltIcon />
              <div className="ms-2 me-auto">
                <div className="fw-bold">Complete</div>
              </div>
            </a>
            <a onClick={()=>{setDiv("TrashPage")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              <DeleteIcon />
              <div className="ms-2 me-auto">
                <div className="fw-bold">Trash</div>
              </div>
            </a>
            <a onClick={()=>{setDiv("SummaryPage")}} className="list-group-item list-group-item d-flex justify-content-between align-items-start">
              <HistoryEduIcon />
              <div className="ms-2 me-auto">
                <div className="fw-bold">Summary</div>
              </div>
            </a>
          </ul>
        </div>

        <div className="rightside">
          {(div == "Todaypage" )? <Todaypage taskupdate={taskupdate_handeler}/> :
          (div == "Allpage") ? <Allpage taskupdates={taskupdate} taskupdate={taskupdate_handeler}/> :
          (div == "Nextweek") ? <Nextweek taskupdates={taskupdate} taskupdate={taskupdate_handeler}/> :
          (div == "WellcomePage") ? <WellcomePage taskupdates={taskupdate} taskupdate={taskupdate_handeler}/> :
          (div == "WorkPage") ? <WorkPage taskupdates={taskupdate} taskupdate={taskupdate_handeler}/> :
          (div == "PersonalPage") ? <PersonalPage taskupdates={taskupdate} taskupdate={taskupdate_handeler}/> :
          (div == "ShoppingPage") ? <ShoppingPage taskupdates={taskupdate} taskupdate={taskupdate_handeler}/> :
          (div == "LearningPage") ? <LearningPage taskupdates={taskupdate} taskupdate={taskupdate_handeler}/> :
          (div == "FitnessPage") ? <FitnessPage taskupdates={taskupdate} taskupdate={taskupdate_handeler}/> :
          (div == "BirthdaywishPage") ? <BirthdaywishPage taskupdates={taskupdate} taskupdate={taskupdate_handeler}/> :
          (div == "WishlistPage") ? <WishlistPage taskupdates={taskupdate} taskupdate={taskupdate_handeler}/> :
          (div == "CompletePage") ? <CompletePage taskupdates={taskupdate} taskupdate={taskupdate_handeler}/> :
          (div == "TrashPage") ? <TrashPage taskupdates={taskupdate} taskupdate={taskupdate_handeler}/> :
          (div == "SummaryPage") ? <SummaryPage /> :
          <Todaypage taskupdate={taskupdate_handeler}/>}
        </div>

    </div>
  )
}
export default Home;