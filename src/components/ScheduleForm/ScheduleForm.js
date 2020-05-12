import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './ScheduleForm.css';
const ScheduleForm = (props) => {
    const {name, time} = props.service;
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
                console.log("appointment successfull");
            })
    };
    return (
        <Container>
            <Row>
                <Col md = {12}>
                    <div className="main-form">
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                            <h3>{name}</h3>
                            <input disabled style={{ cursor:'not-allowed' }} name="time" defaultValue={time} ref={register({ required: true })} placeholder="Select Time" />
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
                </Col>
            </Row>
        </Container>
    );
};

export default ScheduleForm;