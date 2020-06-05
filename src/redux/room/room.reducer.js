import { GET_ROOMS, GET_SINGLE_ROOMS, SORT_BY_PRICE, CLEAR_SORT, SORT_BY_CANCEL_STATUS } from "./room.types"


const initState = { allRooms: JSON.parse(localStorage.getItem("rooms")), room: {}, loading: true, }

const roomReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_ROOMS:
            localStorage.setItem("rooms", JSON.stringify([...action.payload]));
            return {
                 ...state, 
                 allRooms: action.payload, 
                 loading: false, 
            };
        case GET_SINGLE_ROOMS:
            return {
                 ...state, 
                room: state.allRooms.find((x) => x._id === action.payload), 
                loading: false,
            };
        case SORT_BY_PRICE:
            return {
                ...state,
                allRooms: state.allRooms.sort(function (a,b){
                    return b.price - a.price;
                }),
            };
        case SORT_BY_CANCEL_STATUS:
            return {
                ...state,
                allRooms: state.allRooms.filter((x)=>x.cancelAvailable !== false),
            }
        case CLEAR_SORT:
            return {
                ...state,
                allRooms: JSON.parse(localStorage.getItem("rooms")),
            };
        default:
            return state ;
    }
};
export default roomReducer;