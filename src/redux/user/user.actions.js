import { LOGOUT } from "./user.types";





//LOGOUT
export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    });
};