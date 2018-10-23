import 'normalize.css/normalize.css';
import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RoomSelectionForm, RoomOption } from './components';
import roomsFixture from './roomsFixture';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
  }
`;

const AppLayout = styled.div`
  padding: 1.4rem;
  max-width: 80rem;
  width: 100%;
`;

const RoomOptionsWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  padding: 0.6rem 0;
`;

export default class App extends React.Component {
  componentDidMount() {
    if (!sessionStorage.getItem('rooms')) {
      const rooms = JSON.stringify(roomsFixture);
      sessionStorage.setItem('rooms', rooms);
    }
  }

  render() {
    const roomsInitial = JSON.parse(sessionStorage.getItem('rooms')) || roomsFixture;

    return (
      <AppLayout>
        <GlobalStyles />
        <RoomSelectionForm initialRoomsData={roomsInitial}>
          {({
            roomCount, setRoomCount, setOccupants, occupants, submitRooms,
          }) => (
            <Fragment>
              <RoomOptionsWrapper>
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
              </RoomOptionsWrapper>
              <button onClick={submitRooms} type="submit">
                Submit
              </button>
            </Fragment>
          )}
        </RoomSelectionForm>
      </AppLayout>
    );
  }
}
