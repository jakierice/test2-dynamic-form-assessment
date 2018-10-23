import React, { Fragment } from 'react';
import { render } from 'react-testing-library';
import { RoomOption, RoomSelectionForm } from './components';
import roomsFixture from './roomsFixture';

test('<RoomSelectionForm>', () => {
  const wrapper = (
    <RoomSelectionForm initialRoomsData={roomsFixture}>
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
          <button onClick={submitRooms} type="submit">
            Submit
          </button>
        </Fragment>
      )}
    </RoomSelectionForm>
  );

  const { debug } = render(wrapper);

  debug();
});
