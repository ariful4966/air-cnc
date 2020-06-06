import { v4 as uuidv4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./alert.types";


export const alertAction = (msg, alertType) => async (dispatch) => {
    const id = uuidv4();
    try{
        dispatch({
            type: SET_ALERT,
            payload: {msg, alertType, id},
        });
        setTimeout(()=>{
            dispatch({
                type: REMOVE_ALERT,
                payload: id,
            });
        }, 3000);
    }catch(e){
        console.log(e.massage);
    }
};
export default alertAction;