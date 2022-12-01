import React from "react";
import Card from 'react-bootstrap/Card';
import imgabt from '../Img/abt.jpg';
import sang from '../Img/sangram.jpg';
import pri from '../Img/pritam.jpg';
import debd from '../Img/debdol.jpg';
import rahu from '../Img/Rahulsmall.png';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
function About() {
    return (
        <div className="About" style={{ width: '82.2%', height: '100vh', padding: '8px' }}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={imgabt} style={{ width: '100%', height: '30vh' }} />
                <Card.Body>
                    <Card.Title>- Our Mission -</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae officiis cupiditate minima expedita ipsum illo cumque eligendi nihil doloremque voluptatibus, iure ducimus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nesciunt magnam reprehenderit sunt est! Consectetur blanditiis laboriosam mollitia ab neque fugit distinctio.
                    </Card.Text>
                    <Card.Title>- Our Team -</Card.Title>
                </Card.Body>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                    <div>
                        <Card.Img src={debd} style={{ width: '10rem', height: '10rem' }} />
                        <Card.Title>Debdol</Card.Title>
                        <Card.Text>Front-End Support</Card.Text>
                    </div>
                    <div>
                        <Card.Img src={rahu} style={{ width: '10rem', height: '10rem' }} />
                        <Card.Title>Rahul</Card.Title>
                        <Card.Text>Owner & Project Developer</Card.Text>
                    </div>
                    <div>
                        <Card.Img src={sang} style={{ width: '10rem', height: '10rem' }} />
                        <Card.Title>Sangram</Card.Title>
                        <Card.Text>Back-End Support</Card.Text>
                    </div>
                    <div>
                        <Card.Img src={pri} style={{ width: '10rem', height: '10rem' }} />
                        <Card.Title>Pritam</Card.Title>
                        <Card.Text>Web-Design Support</Card.Text>
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginTop:'16px', height:'1.8rem', borderTop:'1px solid #eee'}}>
                <Card.Text><EmailIcon />rahulofficial0675@gmail.com</Card.Text>
                <Card.Text><LinkedInIcon />rahulbiswas0675</Card.Text>
                <Card.Text><LanguageIcon />rahul-biswas.netlify.app</Card.Text>
            </div>
            </Card>
        </div>
    )
}
export default About;