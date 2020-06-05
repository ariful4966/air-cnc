import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import bookingReducer from './booking/booking.reducer';
import alertReducer from './alert/alert.reducer';
import roomReducer from './room/room.reducer';
import persistReducer from 'redux-persist/es/persistReducer';
import userReducer from './user/user.reducer';


const persistConfig = {
    key: "root",
    whitelist: ["booking"],
    storage,
};

const rootReducer = combineReducers({
    booking: bookingReducer,
    alert: alertReducer,
    rooms: roomReducer,
    user: userReducer,
});
export default persistReducer(persistConfig , rootReducer);