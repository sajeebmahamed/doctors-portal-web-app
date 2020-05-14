import React, { useState } from 'react';
import { Container, Button, Modal, Input } from '@material-ui/core';
import { Row, Col, Table, Form } from 'react-bootstrap';

const Prescription = (props) => {
    console.log(props);
    return (
        <Container>
            <Row>
                <Col>
                    <h5>Add Prescription</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default Prescription;