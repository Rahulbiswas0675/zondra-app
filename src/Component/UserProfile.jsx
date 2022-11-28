import React, { useEffect, useState } from 'react';
import "./UserProfile.css";
import Userimg from "../Img/zondra.png";
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import ProgressBar from 'react-bootstrap/ProgressBar';
function UserProfile(props) {
    const[username,setUsername]=useState();
    const[userbio,setUserbio]=useState();
    const[useremail,setUseremail]=useState();

    useEffect(()=>{
        if(localStorage.getItem('User') != null){
            const data = JSON.parse(localStorage.getItem('User'));
            setUsername(data.Name);
            setUserbio(data.Bio);
            setUseremail(data.Email);
        }
    })
    const now = 60;
    const logouthandel=()=>{
        localStorage.removeItem('User');
        props.logdatas(true);
    }
    return (
        <div className="body">
            <div className="TopDiv">
                <Card className="ProfileDiv">
                    <Card.Img src={Userimg} className="ProfilePic" alt="profile pic" />
                    <Card.Body className="card-body" >
                        <Card.Title>{username}</Card.Title>
                        <Card.Text>{userbio}</Card.Text>
                        <Card.Text> <b>{useremail}</b></Card.Text>
                        <div className="btncont">
                        <button type="button" className="btn btn-outline-primary">Change Password?</button>
                        <button type="button" onClick={logouthandel} className="btn btn-outline-primary">Logout</button>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="PerformanceDiv">
                    <Card className="PerformanceContanear">
                        <Card.Text className="Heading">Your Performance</Card.Text>
                        <Alert className="ProgressItem">
                            <h6 className="Content">Previous week Performance</h6>
                            <ProgressBar className="Progress" now={now} label={`${now}%`} />
                            <h6 className="Content">Performance</h6>
                        </Alert>
                        <Alert className="ProgressItem">
                            <h6 className="Content">Previous week Performance</h6>
                            <ProgressBar className="Progress" now={now} label={`${now}%`} />
                            <h6 className="Content">Performance</h6>
                        </Alert>
                        <Alert className="ProgressItem">
                            <h6 className="Content">Previous Month Performance</h6>
                            <ProgressBar className="Progress" now={now} label={`${now}%`} />
                            <h6 className="Content">Performance</h6>
                        </Alert>
                        <Alert className="ProgressItem">
                            <h6 className="Content">Your Overall Performance</h6>
                            <ProgressBar className="Progress" now={now} label={`${now}%`} />
                            <h6 className="Content">Performance</h6>
                        </Alert>

                    </Card>
                </Card>
            </div>
            <Card className="BottonDiv">
                <Card.Text className="HeadingTag">Tags</Card.Text>
                <div className="PerformanceContanear">
                    <Alert className="TagsProgressItem">
                        <h6 className="ContentTag">&#128591; Wellcome</h6>
                        <ProgressBar className="Progress" now={now} label={`${now}%`} />
                        <h6 className="Content">Performance</h6>
                    </Alert>

                    <Alert className="TagsProgressItem">
                        <h6 className="ContentTag">&#128188; Work</h6>
                        <ProgressBar className="Progress" now={now} label={`${now}%`} />
                        <h6 className="Content">Performance</h6>
                    </Alert>

                    <Alert className="TagsProgressItem">
                        <h6 className="ContentTag">&#128583; Personal</h6>
                        <ProgressBar className="Progress" now={now} label={`${now}%`} />
                        <h6 className="Content">Performance</h6>
                    </Alert>

                    <Alert className="TagsProgressItem">
                        <h6 className="ContentTag">&#128722; Shopping</h6>
                        <ProgressBar className="Progress" now={now} label={`${now}%`} />
                        <h6 className="Content">Performance</h6>
                    </Alert>

                    <Alert className="TagsProgressItem">
                        <h6 className="ContentTag">&#128214; Learning</h6>
                        <ProgressBar className="Progress" now={now} label={`${now}%`} />
                        <h6 className="Content">Performance</h6>
                    </Alert>

                    <Alert className="TagsProgressItem">
                        <h6 className="ContentTag">&#127947; Fitness</h6>
                        <ProgressBar className="Progress" now={now} label={`${now}%`} />
                        <h6 className="Content">Performance</h6>
                    </Alert>

                    <Alert className="TagsProgressItem">
                        <h6 className="ContentTag">&#127874; Birthday</h6>
                        <ProgressBar className="Progress" now={now} label={`${now}%`} />
                        <h6 className="Content">Performance</h6>
                    </Alert>

                    <Alert className="TagsProgressItem">
                        <h6 className="ContentTag">&#128525; Wishlist</h6>
                        <ProgressBar className="Progress" now={now} label={`${now}%`} />
                        <h6 className="Content">Performance</h6>
                    </Alert>
                </div>
            </Card>
        </div>
    )
}

export default UserProfile;