import React, { useState } from 'react';

import './BookingFormBook.css';
import { getBookingData } from '../../redux/booking/booking.actions';
import { alertAction } from '../../redux/alert/alert.actions';
import { Alert } from 'react-bootstrap';
import { today } from '../utils/getData';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  faCalendarAlt, faSearch } from "@fortawesome/free-solid-svg-icons";

import  '../CustomButton/CustomButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FontAwesome from 'react-fontawesome';

const BookingFormBook = ({ getBookingData, history, alertAction }) => {
    const [formData, setFormData] = useState({
        location: "",
        arrival: today,
        departure: today,
        adults: 0,
        child: 0,
        babies: 0,

    });
    const { location, arrival, departure, adults, child, babies } = formData;
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const guestNumber = adults + child + babies;
        if (!location) {
            alertAction("Place Provide a valid location", "danger");
        } else {
            if (!guestNumber) {
                alertAction("Place add your guest list", "danger");
            } else {
                getBookingData(formData);
                history.push("/map");
            }
        }

    };
    const onChangeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div className="booking-form-block">
            <h2>Where do you want to go?</h2>
            <form action="" onSubmit={onSubmitHandler}>
                <Alert></Alert>
                <div className="input-item">
                    <label htmlFor="location">location</label>
                    <input
                        type="text"
                        name="location"
                        value={location}
                        placeholder="Add City, Landmark or Address"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="form-input-group date-picker">
                    <div className="input-item">
                        <label htmlFor="arrival">arrival</label>
                        <div className="date-input">
                            <input
                                type="date"
                                name="arrival"
                                value={arrival}
                                min={today}
                                onChange={onChangeHandler}
                            />
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </div>

                    </div>
                    <div className="input-item">
                        <label htmlFor="departure">departure</label>
                        <div className="date-input">
                            <input
                                type="date"
                                name="departure"
                                value={departure}
                                min={arrival}
                                onChange={onChangeHandler}
                            />
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </div>

                    </div>
                </div>
                <div className="input-item">
                    <div className="guest-heading">
                        <span>Guest</span>
                        <h6>
                            {`
                            ${adults > 0 ? adults + "adulst," : ""}
                            ${child > 0 ? child + "child," : ""}
                            ${babies > 0 ? babies + "babies" : ""}
                            `}
                        </h6>
                    </div>
                    <div className="guest-option">
                        <h6>Adults</h6>
                        <div className="btn-action">
                            <span onClick={() => setFormData({ ...formData, adults: adults - 1 })}>
                                -
                            </span>
                            <span>{adults && adults}</span>
                            <span onClick={()=>setFormData({...formData, adults: adults+1})}>
                                +
                            </span>
                        </div>
                    </div>
                    <div className="guest-option">
                        <h6>Child <p>Ae 2-12</p></h6>
                        <div className="btn-action">
                            <span onClick={() => setFormData({ ...formData, child: child - 1 })}>
                                -
                            </span>
                            <span>{child && child.toString()}</span>
                            <span onClick={()=>setFormData({...formData, child: child+1})}>
                                +
                            </span>
                        </div>
                    </div>
                    <div className="guest-option">
                        <h6>Babies <p>Younger then 2</p></h6>
                        <div className="btn-action">
                            <span onClick={() => setFormData({ ...formData, babies: babies - 1 })}>
                                -
                            </span>
                            <span>{babies && babies}</span>
                            <span onClick={()=>setFormData({...formData, babies: babies+1})}>
                                +
                            </span>
                        </div>
                    </div>
                    <button className="custom-button-right custom-button-outline custom-button" >Apply</button>
                </div>
                <button type="submit" className="fullWidth custom-button" > <FontAwesomeIcon icon={faSearch}/> Search</button>
            </form>
        </div>
    );
};
export default withRouter(
    connect(null, { getBookingData, alertAction })(BookingFormBook)
)