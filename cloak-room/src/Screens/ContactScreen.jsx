import React, { useState } from 'react';
import FormContainer from '../components/FormContainer';
import {Form, Button} from 'react-bootstrap'
import AboutUsScreen from './AboutUsScreen';
function ContactScreen() {
  return (
    <div>
        <div className="bg-banner container-flex">
        <div className="container-flex">
                <div className="text-center">
                    <h1 className="heading-text">Contact and Event Hire</h1>
                    <FormContainer>

<Form>

    <Form.Group className="mb-3">
        <Form.Label className="content-text">First and Last Name</Form.Label>
        <Form.Control 
            type="eventName" 
            placeholder="First and Last Name..." 
            
        />
    </Form.Group>

    <Form.Group className="mb-3">
        <Form.Label className="content-text">Email</Form.Label>
        <Form.Control 
            type="email" 
            placeholder="Email..." 
            
        />
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label className="content-text">Inquiries</Form.Label>
        <Form.Control 
            type="email" 
            placeholder="Inquiries..." 
            as="textarea" rows={3}
        />
    </Form.Group>
    <Button 
        variant="primary"
        className="w-100 content-text"
        onClick={AboutUsScreen}
    >
    Send
    </Button>
</Form>
</FormContainer>
                </div>
                </div>
            </div>
    </div>
  )
}

export default ContactScreen