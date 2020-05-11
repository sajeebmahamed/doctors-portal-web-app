import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../../components/FakeData/FakeData.json'
const AppointmentService = (props) => {
    const [serviceData, setServiceData] = useState(data);
    return (
        <Container>
            <h2>Available Appointment on {props.currentDate} </h2>
            <Row>
                {
                    serviceData.map(service =>
                        <Col md={4}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title> {service.name} </Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"> {service.time} </Card.Subtitle>
                                    <Card.Text> {service.seat} </Card.Text>
                                    <Link to="/schedule">
                                        <Button variant="info">BOOK APPOINTMENT</Button>
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