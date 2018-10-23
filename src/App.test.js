import React, { Fragment } from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import { RoomOption, RoomSelectionForm } from './components';
import roomsFixture from './roomsFixture';

afterEach(cleanup);

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

test('<RoomSelectionForm> 2 rooms', () => {
  const { getByLabelText } = render(wrapper);
  const secondRoomOption = getByLabelText('Room 2');

  // room option should not be checked when initialized
  expect(secondRoomOption.checked).toBe(false);

  // room option should be checked after click
  fireEvent.click(secondRoomOption);
  expect(secondRoomOption.checked).toBe(true);
});

test('<RoomSelectionForm> all rooms', () => {
  const { getByLabelText } = render(wrapper);
  const secondRoomOption = getByLabelText('Room 2');
  const thirdRoomOption = getByLabelText('Room 3');
  const fourthRoomOption = getByLabelText('Room 4');

  // no rooms are selected
  expect(secondRoomOption.checked).toBe(false);
  expect(thirdRoomOption.checked).toBe(false);
  expect(fourthRoomOption.checked).toBe(false);

  // room option should be checked after click
  fireEvent.click(fourthRoomOption);
  expect(secondRoomOption.checked).toBe(true);
  expect(thirdRoomOption.checked).toBe(true);
  expect(fourthRoomOption.checked).toBe(true);
});
