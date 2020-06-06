import { LOGOUT, GET_CURRENT_USER, AUTH_ERROR, REGISTRATION_SUCCESS, LOGIN_SUCCESS, LOGIN_FAILED, CLEAR_LOGIN_ERROR } from "./user.types";
import Axios from "axios";
import { alertAction } from "../alert/alert.actions";
import setAuthToken from "../../components/utils/setAuthToken";




export const loadUser = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
        
    }
    try {
        const res = await Axios.get("/api/user");
        dispatch({
            type: GET_CURRENT_USER,
            payload: res.data,
        })
    } catch (e) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};
//Register new user
export const register = ({ displayName, email, password }) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const body = JSON.stringify({ displayName, email, password });
    try {
        const res = await Axios.post("api/user/register", body, config);
        dispatch({
            type: REGISTRATION_SUCCESS,
            payload: res.data,
        });

        dispatch(alertAction("Accounted created", "Success"));
    } catch (e) {
        console.log(e.message);
        const errors = e.response.data.errors;
        if (errors) {
            errors.map((x) => dispatch(alertAction(x.msg, "danger")));
        }
    }
}
//LogIn
export const login = (email, password) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    const body = JSON.stringify({ email, password });
    try {
        const res = await Axios.post("/api/user/login", body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
        dispatch(loadUser());
        dispatch(alertAction("Logged in", "success"))
    } catch (e) {
        const errors = e.response.data.errors;
        if (errors) {
            errors.map((x) => dispatch(alertAction(x.mas, "danger")));
        }
        dispatch({
            type: LOGIN_FAILED,
        });
        dispatch({
            type: CLEAR_LOGIN_ERROR,
        }, 2000);
    }
};
//LOGOUT
export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};
export default {loadUser, register, login, logout};