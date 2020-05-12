import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    return (
        <Container fluid className="banner-fluid">
            <Container>
                <Row>
                    <Col md={8}>
                        <div className="banner-info">
                            <h4>Your New Smile <br /> Starts Here</h4>
                            <p><small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</small></p>
                            <Link to="/appointment">
                                <Button className="main-btn" variant="info">Book Appointment</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className="opening-hours">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faClock} />
                            </div>
                            <div className="opening-text">
                                <h6>Opening Hours</h6>
                                <p> <small> 7.30 AM - 12.00 PM </small></p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="location">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                            </div>
                            <div className="location-text">
                                <h6>Visit our location</h6>
                                <p> <small>Brooklyn, NY 10036, United States</small></p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="contact">
                            <div>
                                <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                            </div>
                            <div className="location-text">
                                <h6>Contact us now</h6>
                                <p> <small>+000 123 456789</small></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Banner;