import React, { useState} from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Appoinment = (props) => {
    const [date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
    }
    return (
        <Container>
            <Row>
                <Col md={4}>
                    {/* <Calendar
                        onChange={onChange} value={date}
                        minDate={new Date()}
                        calendarType = "Arabic"
                        
                    />
                    {date.toDateString()} */}
                    
                    <Calendar
                        onChange={props.handleOnChange} value={date}
                        minDate={new Date()}
                        calendarType="Arabic"

                    />
                </Col>
                <Col md={8}>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Appoinment;