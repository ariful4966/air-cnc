import Axios from "axios";
import { CLEAR_BOOKING_INFO, GET_BOOKING_FORM_DATA } from "./booking.types";
import DateDiff from "date-diff";


export const getBookingData = (data) => async (dispatch) => {
    var data1 = new Date(data.arrival);
    var data2 = new Date(data.departure);
    var diff = new DateDiff(data2, data1);

    try {
        dispatch({
            type: GET_BOOKING_FORM_DATA,
            payload: { ...data, dateDiff: diff.days(), },
        });
    } catch (e) {
        console.log(e.massage);
    }

}

export const saveInfoData = (data) => async (dispatch) => {
    try {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const body = JSON.stringify({ ...data });
        await Axios.post("/api/book", body, config);
    } catch (e) {
        console.log(e.massage);
    }
}

export const clearInfoData = () => async (dispatch) => {
    dispatch({
        type: CLEAR_BOOKING_INFO,
    })
}