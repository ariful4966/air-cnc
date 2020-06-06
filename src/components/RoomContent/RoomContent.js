import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const RoomContent = ({data}) => {
    return (
        <div className="room-content">
            <Container>
                <Row>
                    <Col md={7}></Col>
                    <Col md={4}></Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default RoomContent;