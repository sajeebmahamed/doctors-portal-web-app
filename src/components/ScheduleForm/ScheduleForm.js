import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './ScheduleForm.css';
import { Link } from 'react-router-dom';
const ScheduleForm = (props) => {
    const [appointmentSuccess, setAppointmentSuccess] = useState(null);
    const { name, time } = props.service;
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('https://doctors-portal-web-app.herokuapp.com/appointmentSchedule', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(appointment => {
                // setAppointmentSuccess(null);
                setAppointmentSuccess(appointment);
            })
    };
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <div style={{display: appointmentSuccess && 'none'}} className="main-form">
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <h3>{name}</h3>
                            <input disabled style={{ cursor: 'not-allowed' }} name="time" defaultValue={time} ref={register({ required: true })} placeholder="Select Time" />
                            {errors.time && <span>This field is required</span>}

                            <input name="name" ref={register({ required: true })} placeholder="Your Name" />
                            {errors.name && <span>This field is required</span>}

                            <input name="phone" ref={register({ required: true })} placeholder="Phone Number" />
                            {errors.phone && <span>This field is required</span>}

                            <input name="email" ref={register({ required: true })} placeholder="Email" />
                            {errors.email && <span>This field is required</span>}

                            <input disabled style={{ cursor: 'not-allowed' }} name="date" defaultValue={props.currentDate} ref={register({ required: true })} placeholder="Select Date" />
                            {errors.date && <span>This field is required</span>}

                            <input disabled style={{ cursor: 'not-allowed' }} name="type" defaultValue={name} ref={register({ required: true })} placeholder="Appointment Type" />
                            {errors.type && <span>This field is required</span>}

                            <input className="main-btn" type="submit" />

                        </form>
                    </div>
                    <div>
                        {
                            appointmentSuccess &&
                            <div className="main-form">
                                <h6> Your appointment is successfull</h6>
                                <p>Patient Name : {appointmentSuccess.name} </p>
                                <p>Issue : {appointmentSuccess.type} </p>
                                <p> Appoinment id : {appointmentSuccess._id} </p>
                                <p>Appointment Date : {appointmentSuccess.date}</p>
                                <p>Appointment time : {appointmentSuccess.time} </p>
                                <Link to="/">
                                    <Button className="main-btn"variant="info">BACK TO HOMEPAGE</Button>
                                </Link>
                            </div>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ScheduleForm;