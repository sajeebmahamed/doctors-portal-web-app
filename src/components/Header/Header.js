import React from 'react';
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import './Header.css';
const Header = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Navbar  expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <Nav.Link className="menu"  href="/">Home</Nav.Link>
                                <Nav.Link className="menu" href="#link">About</Nav.Link>
                                <Nav.Link className="menu" href="#link">Dental Service</Nav.Link>
                                <Nav.Link className="menu" href="#link">Reviews</Nav.Link>
                                <Nav.Link className="menu" href="#">Blog</Nav.Link>
                                <Nav.Link className="menu" href="#link">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;