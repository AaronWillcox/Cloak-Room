import React, { useState } from 'react';
import FormContainer from '../components/FormContainer';
import {Form, Button} from 'react-bootstrap'

function RegisterScreen() {

  const [fname, SetFname] = useState('')
  const [sname, SetSname] = useState('')
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
  const registerUser = async () => {

    fetch('https://localhost:7180/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: fname,
                lastName: sname,
                email: email,
                password: password
                })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.message === 'Registration Successful! Please Login!') {
                window.location.href = '/login'
            } 
            else
            {
                alert("Error in reigstration")
            }
        })
        .catch(err => console.log(err))
}

  return (
    <div>
        <div className="bg-banner container-flex">
        <div className="container-flex">
                <div className="text-center">
                    <h1 className="heading-text">Register Your Account</h1>
                    <FormContainer>

<Form>

    <Form.Group className="mb-3" controlId="fname">
        <Form.Label className="content-text">First Name</Form.Label>
        <Form.Control 
            type="fname" 
            placeholder="First Name..." 
            onChange={(e)=>SetFname(e.target.value)}
        />
    </Form.Group>


    <Form.Group className="mb-3" controlId="sname">
        <Form.Label className="content-text">Last Name</Form.Label>
        <Form.Control 
            type="sname" 
            placeholder="Surname..." 
            onChange={(e)=>SetSname(e.target.value)}
        />
    </Form.Group>

    <Form.Group className="mb-3" controlId="email">
        <Form.Label className="content-text">Email</Form.Label>
        <Form.Control 
            type="email" 
            placeholder="Email..." 
            onChange={(e)=>SetEmail(e.target.value)}
        />
    </Form.Group>

    <Form.Group className="mb-3" controlId="password">
        <Form.Label className="content-text">Password</Form.Label>
        <Form.Control
            type="password"
            placeholder="Password..."
            onChange={(e)=>SetPassword(e.target.value)}
        />
    </Form.Group>
    
    <Button 
        variant="primary"
        className="w-100 content-text"
        onClick={registerUser}
    >
    Register
    </Button>
</Form>
</FormContainer>
                </div>
                </div>
            </div>
    </div>
  )
}

export default RegisterScreen