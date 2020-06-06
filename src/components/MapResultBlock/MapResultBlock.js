import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getBookingData } from '../../redux/booking/booking.actions';
import { cancellationFlexibility, priceFilter, clearFilter, } from "../../redux/room/room.actions";
import ResultItem from '../ResultItem/ResultItem';

const MapResultBlock = (rooms, bookingInfo, cancellationFlexibility, clearFilter, priceFilter) => {
    const [status, setStatus] = useState({
        cancellation: false,
        price: false,
    });
    const { location, adults, babies, child } = bookingInfo;
    return (
        <div className="mapResultBlock">
            <div className="secondary-title">
                <h4>
                    <span>
                        {location} {adults + babies + child} Guests
                    </span>{" "}
                    Stay in {location}
                </h4>
            </div>
            <div className="filters">
                <div
                    className={`${status.cancellation && "ft-active"} filter`}
                    onClick={() => {
                        !status.cancellation && cancellationFlexibility();
                        status.cancellation && clearFilter();
                        setStatus({ ...status, cancellation: !status.cancellation });
                    }}
                >
                    cancellation flexibility
                </div>
                <div
                    className={`${status.price && "ft-active"} filter`}
                    onClick={() => {
                        !status.price && priceFilter();
                        status.price && clearFilter();
                        setStatus({ ...status, price: !status.price });
                    }}
                >Price</div>
                <div className="filter">Rating</div>
            </div>
            <div className="results">
                {
                    rooms && rooms.map((x, i) =><ResultItem key={i} datt={x}></ResultItem>)
                }
            </div>
        </div>
    );
};
const mapStateToProps = (state) => ({
    bookingInfo: state.booking.booingData,
    rooms: state.rooms.allRooms,
});
export default connect(mapStateToProps, {
    getBookingData,
    cancellationFlexibility,
    clearFilter,
    priceFilter
})(MapResultBlock);