import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AddForm = ({addContact}) => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState ("")
    function values () {
        let newContact = {
            name,
            lastName, 
            email,
        }
        addContact(newContact)

    }
    return (
        <Form className='container'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>First Name</Form.Label>
                <Form.Control onChange={(e)=> (setName(e.target.value))} type="text" placeholder = "Fist Name" />
            </Form.Group>
            

            <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control onChange={(e)=> (setLastName(e.target.value))} type="text" placeholder = "Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={(e)=> (setEmail(e.target.value))} type="text" placeholder = "email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
           
            <Form.Group className="mb-3">
             <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"/>
            </Form.Group>
        <Link to="/">
        <Button variant="info" onClick={()=> values()}>Save</Button>
        </Link> 
        </Form>
    );
};

export default AddForm;