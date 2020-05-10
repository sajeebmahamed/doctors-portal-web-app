import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Appoinment = () => {
    const [date, setDate] = useState([]);
    console.log(date);
    const changeSelectedDate = (e) => {
        // alert(e);
        setDate(e);
    }
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Calendar
                        onChange={changeSelectedDate} value={new Date()}
                    />
                </Col>
                <Col md={8}>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Appoinment;