import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const DetailsCard = ({getOneContact, oneContact}) => {
    const [loading, setLoading] = useState (true)
    const params = useParams()
    useEffect(() => {
        getOneContact(params.id)
        setTimeout (() => {setLoading(false)},1000)
    }, [])

    if(loading){
        return <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
        </Spinner>
    }

    return (
        <div className='container'>
            <div>{oneContact.name}</div>
            <div>{oneContact.lastName}</div>
            <div>{oneContact.email}</div>

        </div>
    );
};

export default DetailsCard;