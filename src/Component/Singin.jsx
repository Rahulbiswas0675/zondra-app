import "../Component/LoginPage.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useEffect, useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import Col from 'react-bootstrap/Col';
function Singin(props) {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState();
    const [bio, setBio] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const namehandeler = (event) => {
        setName(event.target.value);
    }
    const biohandeler = (event) => {
        setBio(event.target.value);
    }
    const emailhandeler = (event) => {
        setEmail(event.target.value);
    }
    const passwordhandeler = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        let data = {Name:name,Bio:bio, Email:email,Password:password}
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            localStorage.setItem("User",JSON.stringify(data))
            props.regisdata(true);
            setValidated(false);
        }
    };

    return (
        <Card className="singForm">
            <Modal.Title className="loginHeading">Singin</Modal.Title>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>Name</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control type="text" onChange={namehandeler} placeholder="Name" aria-describedby="inputGroupPrepend" required />
                        <Form.Control.Feedback type="invalid">Enter your name.</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Label>Bio</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control type="text" onChange={biohandeler} placeholder="Bio" aria-describedby="inputGroupPrepend" required />
                        <Form.Control.Feedback type="invalid">Enter Bio.</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustomUsername">
                    <Form.Label>Email address</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend"><EmailIcon /></InputGroup.Text>
                        <Form.Control type="email" onChange={emailhandeler} placeholder="name@example.com" aria-describedby="inputGroupPrepend" required />
                        <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustomUsernamea">
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend2"><VisibilityOffIcon /></InputGroup.Text>
                        <Form.Control type="password" onChange={passwordhandeler} placeholder="Password" aria-describedby="inputGroupPrepend" required />
                        <Form.Control.Feedback type="invalid">
                            Create your password.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <div className="btn_item">
                    <Button variant="primary" type="submit" className="loginbtn">Signin</Button>
                    <p className="or">Or</p>
                    <p className="forgot" onClick={()=>{props.sngstate("Login")}}>Login</p>
                </div>
            </Form>


        </Card>
    )
}

export default Singin