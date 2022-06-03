import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name,id,img,price,description} = service;
    const navigate = useNavigate();
    const [services,setService] = useState({});
    const navigateDetails = id =>{
        navigate(`/service/${id}`)

    }
    return (
        <div className='col-md-6 col-sm-12 col-lg-4'>
            <Card style={{ width: '18rem' }}>
  <Card.Img width={300} variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <p>{price}$/h</p>
    <Card.Text>
     {description.slice(0,50)
     }
    </Card.Text>
    <Button onClick={()=>navigateDetails(id)} variant="success">See more</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Service;