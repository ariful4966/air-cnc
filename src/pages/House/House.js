import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleRoom } from '../../redux/room/room.actions';
import { PulseLoaderSpinner } from '../../components/utils/Spener';
import RoomThumbnail from '../../components/RoomThumbnail/RoomThumbnail';
import RoomContent from '../../components/RoomContent/RoomContent';

const House = ({ getSingleRoom, rooms }) => {
    const { id } = useParams();
    useEffect(() => {
        getSingleRoom(id)
    }, [getSingleRoom, id]);
    return rooms.loading && rooms.room ? (
        <PulseLoaderSpinner loading={rooms.loading}></PulseLoaderSpinner>
    ) : (
            <div className="housPage">
                <RoomThumbnail image={rooms.room && rooms.room.thumbnail}></RoomThumbnail>
                <RoomContent data={rooms.room}></RoomContent>
            </div>
        )
    
};
const mapStateToProps = (state) => ({
    rooms: state.rooms,
})
export default connect(mapStateToProps, { getSingleRoom })(House);