import React, { useState } from 'react';
import Alert from '../utils/Alert';
import alertAction from '../../redux/alert/alert.actions';
import register from '../../redux/user/user.actions';
import { connect } from 'react-redux';




const SignUpAuth = ({ toggleBtn, register, alertAction }) => {
    const [formData, setFormData] = useState({
        displayName: "",
        email: "",
        password: "",
        rePassword: "",
    });
    const { displayName, email, password, rePassword } = formData;
    const onSubmitHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const onChangeHandler = (e) => {
        if (password !== rePassword) {
            alertAction("Password don't match", "danger");

        }
        register({ displayName, email, password });
        e.preventDefault();
    }
    return (
        <div className="signup_area auth-block">
            <h6>Sign In</h6>
            <form action="" onSubmit={onSubmitHandler}>
                <Alert></Alert>
                <div className="auth-input-block">
                    <label htmlFor="displayName">displayName</label>
                    <input type="name" name="displayName" onChange={onChangeHandler} />
                </div>
                <div className="auth-input-block">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={onChangeHandler} />
                </div>
                <div className="auth-input-block">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={onChangeHandler} />
                </div>
                <div className="auth-input-block">
                    <label htmlFor="rePassword">Re-Password</label>
                    <input type="password" name="rePassword" onChange={onChangeHandler} />
                </div>
                <button className="fullWidth rounded custom-button">Sign Up</button>
                <p onClick={(e) => toggleBtn()}>Already have an account ?{" "} <strong>Sign Up</strong></p>
            </form>
        </div>
    );
};

export default connect(null, { register, alertAction }) (SignUpAuth);