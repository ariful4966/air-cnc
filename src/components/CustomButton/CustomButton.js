import React from 'react';
import './CustomButton.css';

const CustomButton = (fullWidth, outline, right, rounded, warning, children, mt2, cardPay, ...otherprops ) => {
    return (
        <button
        className={`
        ${cardPay ? "custom-button-cardPay" : ""}
         ${ warning ? "custom-button-waring" : ""} 
        ${fullWidth ? "fullWidth" : ""} 
        ${right ? "custom-button-right" : ""} 
        ${outline ? "custom-button-outline" : ""} 
        ${rounded ? "rounded" : ""}
         custom-button`}
        {...otherprops}>
        {children}
    </button>
    )
};

export default CustomButton;