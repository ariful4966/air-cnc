import React, { useEffect } from 'react';
import { getRooms } from '../../redux/room/room.actions';
import { Redirect } from 'react-router-dom';
import { PulseLoaderSpinner } from '../../components/utils/Spener';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

const PlaceMap = ({ bookingInfo, getRooms, rooms: { loading, allRooms }, }) => {
    useEffect(() => {
        getRooms();

    }, [getRooms]);
    if (!bookingInfo) {
        return <Redirect to="/"></Redirect>;
    }
    const { location, adults, child, babies } = bookingInfo;
    return loading ? (
        <PulseLoaderSpinner loading={loading}></PulseLoaderSpinner>
    ) : (
            <div className="map-place-page">
                <div className="travel-search-info">
                    <div className="search-place-name">{location}</div>
                    <div className="search-booking-time">Jun 20-25</div>
                    <div className="search-guest-list">
                        {adults + child + babies} Guest <FontAwesomeIcon icon={faSearch} />{" "}
                    </div>
                </div>
                <Row>
                    <Col md={{ span: 4, offset: 1 }}>

                    </Col>
                    <Col className="custom-map-canvas" md={7}>

                    </Col>
                </Row>
            </div>
        )
};
const mapStateToProps =(state)=>({
    bookingInfo: state.booking.bookingData,
    rooms: state.rooms,
});
export default connect( mapStateToProps, {getRooms})(PlaceMap);