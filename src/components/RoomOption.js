import React from 'react';
import styled from 'styled-components';

const OptionWrapper = styled.div`
  background: #d3d3d3;
  width: 10rem;
  height: 8rem;
`;

const RoomOption = ({ roomNumber, roomCount, handleRoomSelect }) => {
  const active = roomNumber <= roomCount;
  return (
    <OptionWrapper>
      <input
        type="checkbox"
        checked={active}
        value={roomNumber}
        onChange={() => handleRoomSelect(roomNumber)}
      />
      {roomNumber}
      {' '}
      {active ? 'active' : 'inactive'}
    </OptionWrapper>
  );
};

export default RoomOption;
