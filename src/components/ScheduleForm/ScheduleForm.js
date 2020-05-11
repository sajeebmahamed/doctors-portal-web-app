import React from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './ScheduleForm.css';
const ScheduleForm = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <Container>
            <Row>
                <Col>
                    <Modal.Dialog>
                        <Modal.Header closeButton>
                            <Modal.Title>Teeth Cleaning</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                                
                                <input name="time"  ref={register({ required: true })} placeholder = "Select Time" />
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
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="primary">Send</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Col>
            </Row>
        </Container>
    );
};

export default ScheduleForm;