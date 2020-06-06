import React from 'react';
import './NotMatch.css';

const NotMatch = () => {
    return (
        <div className="notFoundPage">
            <h1>4O4 <small>Error!</small></h1>
            <p>Your Page Is Not Found <a href="/">Back Homepage</a></p>
        </div>
    );
};

export default NotMatch;