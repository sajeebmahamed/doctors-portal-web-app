import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AppointmentService = () => {
    return (
        <Container>
                <h2>Available Appointment on Feb 7, 2020 </h2>
            <Row>
                <Col md= {4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Teeth Orthodontics</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> 8.00 AM - 9.00 AM </Card.Subtitle>
                            <Card.Text>
                                10 SPACES AVAILABLE
                            </Card.Text>
                            <Button variant="info">BOOK APPOINTMENT</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Teeth Orthodontics</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> 8.00 AM - 9.00 AM </Card.Subtitle>
                            <Card.Text>
                                10 SPACES AVAILABLE
                            </Card.Text>
                            <Button variant="info">BOOK APPOINTMENT</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Teeth Orthodontics</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"> 8.00 AM - 9.00 AM </Card.Subtitle>
                            <Card.Text>
                                10 SPACES AVAILABLE
                            </Card.Text>
                            <Button variant="info">BOOK APPOINTMENT</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AppointmentService;