import React from 'react';
import { Container } from 'react-bootstrap';
import HomeArea from '../../components/HomeArea/HomeArea';

const Home = () => {
    return (
        <div className="homePage">
            <Container>
                <HomeArea></HomeArea>
            </Container>
        </div>
    );
};

export default Home;