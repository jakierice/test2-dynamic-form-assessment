import React, { Fragment } from 'react';
import { RoomSelectionForm, RoomOption } from './components';

const roomsFixture = {
  roomCount: 1,
  occupants: {
    1: {
      childCount: 0,
      adultCount: 1,
    },
    2: {
      childCount: 0,
      adultCount: 1,
    },
    3: {
      childCount: 0,
      adultCount: 1,
    },
    4: {
      childCount: 0,
      adultCount: 1,
    },
  },
};

class App extends React.Component {
  componentDidMount() {
    if (!sessionStorage.getItem('rooms')) {
      const rooms = JSON.stringify(roomsFixture);
      sessionStorage.setItem('rooms', rooms);
    }
  }

  render() {
    const roomsInitial = JSON.parse(sessionStorage.getItem('rooms')) || roomsFixture;

    return (
      <RoomSelectionForm initialValues={roomsInitial}>
        {({
          roomCount, setRoomCount, setOccupants, occupants, submitRooms,
        }) => (
          <Fragment>
            <RoomOption
              roomNumber={1}
              roomCount={roomCount}
              occupants={occupants}
              handleRoomSelect={setRoomCount}
              handleOccupantSelect={setOccupants}
            />
            <RoomOption
              roomNumber={2}
              roomCount={roomCount}
              occupants={occupants}
              handleRoomSelect={setRoomCount}
              handleOccupantSelect={setOccupants}
            />
            <RoomOption
              roomNumber={3}
              roomCount={roomCount}
              occupants={occupants}
              handleRoomSelect={setRoomCount}
              handleOccupantSelect={setOccupants}
            />
            <RoomOption
              roomNumber={4}
              roomCount={roomCount}
              occupants={occupants}
              handleRoomSelect={setRoomCount}
              handleOccupantSelect={setOccupants}
            />
            <button onClick={submitRooms} type="submit">
              Submit
            </button>
          </Fragment>
        )}
      </RoomSelectionForm>
    );
  }
}

export default App;
