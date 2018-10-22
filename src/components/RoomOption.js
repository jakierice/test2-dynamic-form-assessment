import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OptionWrapper = styled.div`
  background: #d3d3d3;
  margin: 2rem;
  min-width: 15rem;
  /* width: 10rem;
  height: 8rem; */
`;

const RoomOption = ({
  roomNumber,
  roomCount,
  handleRoomSelect,
  handleOccupantSelect,
  occupants,
}) => {
  const active = roomNumber <= roomCount;
  const optionId = `room-option-${roomNumber}`;
  const childOccupantsId = `child-occupants-${roomNumber}`;
  const adultOccupantsId = `adult-occupants-${roomNumber}`;

  return (
    <OptionWrapper>
      {roomNumber === 1 ? (
        'Room 1'
      ) : (
        <Fragment>
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
        </Fragment>
      )}
      <label htmlFor={adultOccupantsId}>Adults</label>
      <select
        id={adultOccupantsId}
        value={occupants[roomNumber].adultCount}
        onChange={e => handleOccupantSelect({
          adultCount: e.target.value,
          childCount: occupants[roomNumber].childCount,
          roomNumber,
        })
        }
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <label htmlFor={childOccupantsId}>Children</label>
      <select
        id={childOccupantsId}
        value={occupants[roomNumber].childCount}
        onChange={e => handleOccupantSelect({
          childCount: e.target.value,
          adultCount: occupants[roomNumber].adultCount,
          roomNumber,
        })
        }
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </OptionWrapper>
  );
};

RoomOption.propTypes = {
  handleRoomSelect: PropTypes.func.isRequired,
  roomCount: PropTypes.number.isRequired,
  roomNumber: PropTypes.number.isRequired,
};

export default RoomOption;
