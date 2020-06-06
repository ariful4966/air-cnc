import React from 'react';
import { Container } from 'react-bootstrap';

const RoomThumbnail = ({image}) => {
    return (
        <div className="room-thumbnails-wrapper">
            <Container>
                <div className="rooms-thumbnails">
                    <div className="rooms-thumbnail">
                        <img src={image & image.imageOne} alt=""/>
                    </div>
                    <div className="rooms-thumbnail">
                        <img src={image & image.imageTwo} alt=""/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RoomThumbnail;