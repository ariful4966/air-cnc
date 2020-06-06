import React, { useState } from 'react';
import Alert from '../utils/Alert';
import login from '../../redux/user/user.actions';
import { connect } from 'react-redux';

import './Login.css';


const LoginAuth = ({ toggleBtn, login, isAuthenticated, history }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formData;
    const onSubmitHandler = (e) => {
        setFormData({...formData, [e.terget.name]: e.terget.value})
    }
    const onChangeHandler = (e) => {
        login(email, password);
        e.preventDefault();
    }

    return (
        <div className="login_area auth-block">
            <h6>Log in</h6>
            <Alert></Alert>
            <form action="" onSubmit={onSubmitHandler}>
                <div className="auth-input-block">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={onChangeHandler} />
                </div>
                <div className="auth-input-block">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={onChangeHandler} />
                </div>
                <button className="fullWidth rounded custom-button">Login</button>
                <p onClick={(e) => toggleBtn()}>Don't have an account <strong>Sign Up</strong></p>
            </form>
        </div>
    );
};

export default connect(null, {login}) (LoginAuth);