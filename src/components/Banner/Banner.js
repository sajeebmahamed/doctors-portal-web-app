import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Container>
            <Row>
                <Col md= {12}>
                    <Link to= "/appointment">
                        <Button variant="info">Book Appointment</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;