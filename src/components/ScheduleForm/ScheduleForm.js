import React, { useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './ScheduleForm.css';
const ScheduleForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:4200/appointmentSchedule', {
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
                    <div>
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

                            <input name="time" defaultValue="8.00 AM - 10.00 AM" ref={register({ required: true })} placeholder="Select Time" />
                            {errors.time && <span>This field is required</span>}

                            <input name="name" ref={register({ required: true })} placeholder="Your Name" />
                            {errors.name && <span>This field is required</span>}

                            <input name="phone" ref={register({ required: true })} placeholder="Phone Number" />
                            {errors.phone && <span>This field is required</span>}

                            <input name="email" ref={register({ required: true })} placeholder="Email" />
                            {errors.email && <span>This field is required</span>}

                            <input name="date" defaultValue={props.currentDate} ref={register({ required: true })} placeholder="Select Date" />
                            {errors.date && <span>This field is required</span>}

                            <input type="submit" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ScheduleForm;