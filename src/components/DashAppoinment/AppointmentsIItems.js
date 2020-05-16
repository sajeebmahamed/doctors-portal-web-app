import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';

const AppointmentsIItems = () => {
    const [date, setDate] = useState(new Date());
    const [appointsDate, setAppointsDate] = useState([]);
    const onChange = date => {
        setDate(date);
    }
    useEffect(() => {
        fetch('https://doctors-portal-web-app.herokuapp.com/appointments')
        .then(res => res.json())
        .then(data => {
            setAppointsDate(data);
        })
    }, [])
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Calendar
                            onChange={onChange} value={date}
                            calendarType = "Arabic"
                            
                        />
                        
                </Col>
                <Col md={6}>
                    <h3>Appointments</h3> <h3>{date.toDateString()}</h3>
                    <Table responsive="md" className="s-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Schedule</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointsDate.map((finalDate,i) =>
                                    <tr>
                                        <td> {i+1} </td>
                                        <td> {finalDate.name} </td>
                                        <td> {finalDate.time} </td>
                                        <td> 
                                            <Button className="main-btn" variant="info"> NOT VISITED </Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default AppointmentsIItems;