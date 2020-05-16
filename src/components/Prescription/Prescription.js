import React from 'react';
import { Container} from '@material-ui/core';
import { Row, Col} from 'react-bootstrap';

const Prescription = (props) => {
    console.log(props);
    return (
        <Container>
            <Row>
                <Col>
                    <h5>Add Prescription</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default Prescription;