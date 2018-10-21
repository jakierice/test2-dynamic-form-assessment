import React, { Fragment } from 'react';
import { RoomSelectionForm, RoomOption } from './components';

const App = () => (
  <RoomSelectionForm>
    {({ roomCount, setRoomCount }) => (
      <Fragment>
        <RoomOption roomNumber={1} roomCount={roomCount} handleRoomSelect={setRoomCount} />
        <RoomOption roomNumber={2} roomCount={roomCount} handleRoomSelect={setRoomCount} />
        <RoomOption roomNumber={3} roomCount={roomCount} handleRoomSelect={setRoomCount} />
        <RoomOption roomNumber={4} roomCount={roomCount} handleRoomSelect={setRoomCount} />
      </Fragment>
    )}
  </RoomSelectionForm>
);

export default App;
