import "../Component/LoginPage.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import Col from 'react-bootstrap/Col';
function Login(props) {
    const [validated, setValidated] = useState(false);
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

    const emailhandel=(event)=>{
        setEmail(event.target.value);
    }
    const passwordhandel =(event)=>{
        setPassword(event.target.value);
    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
        } else {
            const data = JSON.parse(localStorage.getItem("User"));
            if(!data){
                console.log("Data not found");
                event.preventDefault();
            }else{
                if(data.Email != email){
                    event.preventDefault();
                }else{
                    if(data.Password === password){
                        props.logindata(true)
                    }else{
                        console.log("Password not match");
                        event.preventDefault();
                    }
                }
            }
            setValidated(false);
        }
    };
    return (
        <Card className="loginForm">
            <Modal.Title className="loginHeading">Login</Modal.Title>
            <Form className="formgroup" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} controlId="validationCustomUsername1">
                    <Form.Label>Email address</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend1"><EmailIcon /></InputGroup.Text>
                        <Form.Control type="email" onChange={emailhandel} placeholder="name@example.com" aria-describedby="inputGroupPrepend" required />
                        <Form.Control.Feedback type="invalid">Please enter your email.</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustomUsername">
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend"><VisibilityOffIcon /></InputGroup.Text>
                        <Form.Control type="password" onChange={passwordhandel} placeholder="Password" aria-describedby="inputGroupPrepend" required />
                        <Form.Control.Feedback type="invalid">
                            Enter your password.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <div className="btn_item">
                    <Button variant="primary" type="submit" className="loginbtn">Login</Button>
                    <p className="forgot">Forgot Password?</p>
                    <p className="or">Or</p>
                    <p className="forgot" onClick={()=>{props.sngstate("Singup")}}>Singin</p>
                </div>
            </Form>
        </Card>
    )
}

export default Login;