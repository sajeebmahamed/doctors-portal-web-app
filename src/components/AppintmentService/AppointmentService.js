import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScheduleForm from '../ScheduleForm/ScheduleForm';
// import data from '../../components/FakeData/FakeData.json'
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
            <h2>Available Appointment on {props.currentDate} </h2>
            <Row>
                {
                    serviceData.map(service =>
                        <Col md={4}>
                            <Card className = "main-card" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title> {service.name} </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"> {service.time} </Card.Subtitle>
                                    <Card.Text> {service.seat} </Card.Text>
                                    <Link to="/schedule">
                                        <Button onClick={() => props.handleBookAppointment(service)} variant="info">BOOK APPOINTMENT</Button>
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