import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SignUpAuth from '../../components/SignUpAuth/SignUpAuth';
import LoginAuth from '../../components/LoginAuth/LoginAuth';
import { useHistory, Redirect } from 'react-router-dom';

import './Auth.css';
const Auth = ({isAuthenticated}) => {
    const [toggle, setToggle]= useState(false);
    const changeToggler = (e)=>{
        setToggle(!toggle);
    };
    let history = useHistory();
    if(isAuthenticated){
        return <Redirect to={history.goBack()}></Redirect>
    }
    return (
        <div className="authPage">
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        {
                            toggle ? (<SignUpAuth toggleBtn={changeToggler}></SignUpAuth>)
                            :(<LoginAuth toggleBtn={changeToggler}></LoginAuth>)
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Auth;