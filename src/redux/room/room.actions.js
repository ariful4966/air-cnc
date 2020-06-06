import Axios from "axios";
import { GET_ROOMS, GET_SINGLE_ROOMS, SORT_BY_CANCEL_STATUS, SORT_BY_PRICE, CLEAR_SORT } from "./room.types";

//Get all rooms
export const getRooms = () => async (dispatch) => {
    try {
        const res = await Axios.get("/api/room");
        dispatch({
            type: GET_ROOMS,
            payload: res.data,
        });
    } catch (e) {
        console.log(e.message);
    }
};
//Get Single Room by id
export const getSingleRoom = (id) => async (dispatch) => {
    try {
        dispatch({
            type: GET_SINGLE_ROOMS,
            payload: id,
        });
    } catch (e) {
        console.log(e.message);
    }
};
//Sort
export const cancellationFlexibility = () => async (dispatch) => {
    try {
        dispatch({
            type: SORT_BY_CANCEL_STATUS,
        });
    } catch (e) {
        console.log(e.message);
    }
};
export const priceFilter = () => async (dispatch) => {
    try {
        dispatch({
            type: SORT_BY_PRICE,
        });
    } catch (e) {
        console.log(e.message);
    }
};

export const clearFilter = () => async (dispatch)=>{
    try {
        dispatch({
            type: CLEAR_SORT,
        });
    } catch (e) {
        console.log(e.message);
    }
};