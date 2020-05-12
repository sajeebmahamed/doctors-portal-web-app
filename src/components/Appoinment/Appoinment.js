import React, { useState} from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointment.css'

const Appoinment = (props) => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
    }
    return (
        <Container fluid className="appointment-fluid">
            <Container>
                <Row>
                    <Col md={4}>
                        {/* <Calendar
                            onChange={onChange} value={date}
                            minDate={new Date()}
                            calendarType = "Arabic"
                            
                        />
                        {date.toDateString()} */}
                        
                        <Calendar className="calender"
                            onChange={props.handleOnChange} value={date}
                            minDate={new Date()}
                            calendarType="Arabic"

                        />
                    </Col>
                    <Col md={8}>
                        
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Appoinment;