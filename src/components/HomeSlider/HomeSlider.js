import React, { useState, useEffect } from 'react';

import './HomeSlider.css';
import { Col, Row } from 'react-bootstrap';
import homeSliderData from '../../fakeData/homeSliderData';
import ServiceCard from '../ServiceCard/ServiceCard';

const HomeSlider = () => {
    const [home, setHome] = useState([]);
    useEffect(()=>{
        setHome(homeSliderData);
    },[]);

    return (
        <div className="homeSlider">
            <div className="secondary-title">
                <h4>Homes</h4>
                <a href="/">See all</a>
            </div>  
            <div className="experiences">
                <Row> 
                    {
                        home.map((x, i)=>(
                            <Col md={4} key={i}>
                                <ServiceCard data={x}></ServiceCard>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </div>
    );
};

export default HomeSlider;