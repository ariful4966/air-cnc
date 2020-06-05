import React, { useState, useEffect } from 'react';
import experienceData from '../../fakeData/experienceData';
import {Row, Col} from 'react-bootstrap';
import ServiceCard from '../ServiceCard/ServiceCard';

import './Experience.css';

const Experience = () => {
    const [experience, setExperience] = useState([]);
    useEffect(() => {
        const data04 = experienceData.slice(0, 4);
        setExperience(data04);
    }, []);
    return (
        <div className="experienceShow">
            <div className="secondary-title">
                <h4>Experiences</h4>
                <a href="/">See all</a>
            </div>
            <div className="experiences">
                <Row>
                    {
                        experience.map((x, i)=>(
                            <Col md={3} key={i}>
                                <ServiceCard data={x}></ServiceCard>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </div>
    );
};

export default Experience;