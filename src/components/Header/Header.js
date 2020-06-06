import React, { Fragment, useState, useEffect } from 'react';
import {  Container,  Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';

// import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import {logout} from '../../redux/user/user.actions';

import './Header.css'

const Header = ({ auth, logout }) => {
    const [path, setPath] = useState("");
    let location = useLocation();
    useEffect(()=>{
        setPath(location.pathname)
    }, [location.pathname]);
    return (
        <div className="header_area">
            <Container>
                <Row>
                    <Col md={4}>
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className="headerNavigation">
                            <ul className="options">
                                {
                                    path === '/' ? (
                                        <Fragment>
                                            <li className="option">
                                                <Link to="/l">Host your home</Link>
                                            </li>
                                            <li className="option">
                                                <Link to="/gf">Host your experiencs</Link>
                                            </li>
                                        </Fragment>
                                    ) : (
                                            ""
                                        )
                                }
                                <li className="option">
                                    <Link to="checkout">Help</Link>
                                </li>
                                {
                                    path === '/' ? (
                                        <Fragment>
                                            <li className="option">
                                                {
                                                    !auth ? (
                                                        <Link to="/auth">
                                                            <button className=" custom-button rounded" >Login</button>
                                                        </Link>
                                                    ) : (
                                                            <li className="option" onClick={() => logout()}>
                                                                <button className=" custom-button rounded custom-button-warning">Logout</button>
                                                            </li>
                                                        )
                                                }
                                            </li>
                                        </Fragment>
                                    ) : (
                                            <Fragment>
                                                {
                                                    !auth ? (
                                                        <Fragment>
                                                            <li className="option">
                                                                <Link to="/house">Login</Link>
                                                            </li>
                                                            <li className="option">
                                                                <button className="custom-button rounded">Sign up</button>
                                                            </li>
                                                        </Fragment>
                                                    ) : (
                                                            <li className="option" onClick={() => logout()}>
                                                                <button className=" custom-button rounded custom-button-warning">Logout</button>
                                                            </li>
                                                        )
                                                }
                                            </Fragment>
                                        )
                                }

                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
const mapStateToProps = (state) => ({
    auth: state.user.isAuthenticated,
});
export default connect( mapStateToProps, {logout })(Header);