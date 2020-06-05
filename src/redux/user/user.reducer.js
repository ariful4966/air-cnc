import { GET_CURRENT_USER, REGISTRATION_SUCCESS, LOGIN_SUCCESS, AUTH_ERROR, REGISTRATION_FAILED, LOGOUT, LOGIN_FAILED, CLEAR_LOGIN_ERROR } from "./user.types";

const initState = { token: localStorage.getItem("token"), isAuthenticated: null, user: null, loading: true, error: [], };

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                loading: false,
            };
        case REGISTRATION_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
            };
        case LOGIN_FAILED:
            return {
                ...state,
                token: null,
                user: null,
                loading: false,
                error: action.payload,
            };
        case AUTH_ERROR:
        case REGISTRATION_FAILED:
        case LOGOUT:
            localStorage.removeItem("token")
            return {
                ...state,
                isAuthenticated: false,
                loading: false,
                user: null,
                token: null,
            };
        case CLEAR_LOGIN_ERROR:
            return {
                ...state,
                error: [],
            };
        default:
            return state;
    }
};
export default userReducer;