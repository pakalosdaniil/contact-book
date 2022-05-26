import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactList = ({getContact, contacts, deleteContact}) => {
    const [selectedContact, setSelectedContact] = useState("")
    useEffect (() => {
        getContact()
    }, [])
    return (
        <div className='container d-flex justify-content-between flex-wrap'>
            {contacts.map ((item) => (
                <Card
                key = {item.id}
                onClick={() => setSelectedContact(item.id)}
                style={{border: selectedContact === item.id ? '1px solid black' : "", width: '18rem', backgroundColor: "ivory"}}
                className="mb-3">
                <Card.Body >
                    <Card.Title>Name: {item.name}</Card.Title>
                    <Card.Text>Last Name: {item.lastName} </Card.Text>
                    <Card.Text>Email: {item.email} </Card.Text>

                    <Link to={`edit/${item.id}`}>
                    <Button variant="primary">Edit</Button>
                    </Link>

                    <Button variant="danger" onClick={() =>deleteContact(item.id)}>Delete</Button>

                    <Link to={"/showCard/"+item.id}>
                    <Button variant="primary">ShowCard</Button>
                    </Link>
                    
                </Card.Body>
                </Card>
            ))}
            
        </div>
    );
};

export default ContactList;