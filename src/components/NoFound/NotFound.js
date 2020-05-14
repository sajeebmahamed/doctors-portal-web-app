import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h3> 404! NOT FOUND! </h3>
                    <Button href="/" className="table-btn" variant="info"> HOME </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;