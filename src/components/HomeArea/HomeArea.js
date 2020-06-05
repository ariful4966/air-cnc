import React from 'react';

import './HomeArea.css';
import { Row, Col } from 'react-bootstrap';
import BookingFormBook from '../BookingFormBook/BookingFormBook';
import Experience from '../Experience/Experience';
import HomeSlider from '../HomeSlider/HomeSlider';

const HomeArea = () => {
    return (
        <div className="home_area">
            <Row>
                <Col md={4}>
                    <BookingFormBook></BookingFormBook>
                </Col>
                <Col md={8}>
                    <Experience></Experience>
                    <HomeSlider></HomeSlider>
                </Col>
            </Row>
        </div>
    );
};

export default HomeArea;