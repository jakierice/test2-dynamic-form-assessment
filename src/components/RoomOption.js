import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OccupantsSelect from './OccupantsSelect';

const OptionWrapper = styled.div`
  background: ${({ active }) => (active ? '#ffffff' : '#dbdbe3')};
  border-radius: 14px;
  border: 8px solid ${({ active }) => (active ? '#e7e7e7' : '#ced0dd')};
  margin-right: 0.4rem;
  max-width: 12rem;
`;

const RoomNumberWrapper = styled.div`
  background: ${({ active }) => (active ? '#e7e7e7' : '#dbdbe3')};
  padding: 1rem 1.2rem;
  width: 100%;
`;

const RoomOption = (props) => {
  const { roomNumber, roomCount, handleRoomSelect } = props;
  const active = roomNumber <= roomCount;
  const optionId = `room-option-${roomNumber}`;

  return (
    <OptionWrapper active={active}>
      <RoomNumberWrapper active={active}>
        {roomNumber === 1 ? (
          'Room 1'
        ) : (
          <label htmlFor={optionId}>
            <input
              id={optionId}
              type="checkbox"
              checked={active}
              value={roomNumber}
              onChange={() => handleRoomSelect(roomNumber)}
            />
            Room
            {roomNumber}
          </label>
        )}
      </RoomNumberWrapper>
      <OccupantsSelect {...props} />
    </OptionWrapper>
  );
};

RoomOption.propTypes = {
  occupants: PropTypes.shape({
    room: PropTypes.shape({
      adultCount: PropTypes.number.isRequired,
      childCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
  roomCount: PropTypes.number.isRequired,
  roomNumber: PropTypes.number.isRequired,
};

export default RoomOption;
