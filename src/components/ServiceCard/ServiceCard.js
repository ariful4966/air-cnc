import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import './ServiceCard.css';

const ServiceCard = ({ data }) => {
    const { place, title, price, rating, thumbnail   } = data;
    return (
        <div className="serviceCard">
            <div className="serviceThumbnail">
                <img src={thumbnail} alt={title} />
            </div>
            <div className="serviceContent">
                <h5 className="placeTitle">{place}</h5>
                <h2 className="serviceTitle">{title}</h2>
                <div className="serviceMeta">
                    <h5 className="price">${price} per person</h5>
                    <div className="rating">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                        <span>{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;