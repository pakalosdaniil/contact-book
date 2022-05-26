import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const EditForm = ({getOneContact, oneContact, updateContact}) => {
    const [name, setName] = useState ("")
    const [lastName, setLastName] = useState ("")
    const [email, setEmail] = useState ("")
    const params = useParams()

    useEffect (() => {
        getOneContact(params.id)
    },[])

    useEffect(()=> {
        if(oneContact){
            setName(oneContact.name)
            setLastName(oneContact.lastName)
            setEmail(oneContact.email)
        }
    }, [oneContact])

    function handleValues () {
        let editedContact = {
            name,
            lastName,
            email
        }
        updateContact(params.id, editedContact)
    }

    return (
        <Form className="container">
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>First Name</Form.Label>
        <Form.Control value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" type="text" />
        </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="text" />
            </Form.Group>

            <Link to="/">
                <Button variant="warning" onClick={()=> handleValues()}>Save</Button>
            </Link>
        </Form>
    );
};

export default EditForm;