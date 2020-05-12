import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AppointmentService.css'

const AppointmentService = (props) => {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        fetch('https://doctors-portal-web-app.herokuapp.com/service')
        .then(res => res.json())
        .then(data => {
            setServiceData(data)
        })
    }, [])
    return (
        <Container>
            <h2 className="service-header">Available Appointment on {props.currentDate} </h2>
            <Row>
                {
                    serviceData.map(service => 
                        <Col md={4}>
                            <Card className = "main-card mb-5" style={{ width: '18rem' }}>
                                <Card.Body style={{textAlign:'center'}}>
                                    <Card.Title style={{ color:'#1CC7C1'}}> {service.name} </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"> {service.time} </Card.Subtitle>
                                    <Card.Text> {service.seat} </Card.Text>
                                    <Link to="/schedule">
                                        <Button className="main-btn" onClick={() => props.handleBookAppointment(service)} variant="info">BOOK APPOINTMENT</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default AppointmentService;