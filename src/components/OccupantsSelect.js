import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectInputsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;

  label {
    width: 50%;

    select {
      margin: 0.4rem 0;
    }
  }
`;

const OccupantsSelect = ({
  occupants, roomCount, roomNumber, handleOccupantSelect,
}) => {
  const active = roomNumber <= roomCount;
  const childOccupantsId = `child-occupants-${roomNumber}`;
  const adultOccupantsId = `adult-occupants-${roomNumber}`;

  return (
    <SelectInputsWrapper>
      <label htmlFor={adultOccupantsId}>
        Adults (18+)
        <br />
        <select
          disabled={!active}
          id={adultOccupantsId}
          value={active ? occupants[roomNumber].adultCount : 1}
          onChange={e => handleOccupantSelect({
            adultCount: e.target.value,
            childCount: occupants[roomNumber].childCount,
            roomNumber,
          })
          }
          data-testid="adult-count-select"
        >
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </label>
      <label htmlFor={childOccupantsId}>
        Children (0-17)
        <br />
        <select
          disabled={!active}
          id={childOccupantsId}
          onChange={e => handleOccupantSelect({
            childCount: e.target.value,
            adultCount: occupants[roomNumber].adultCount,
            roomNumber,
          })
          }
          value={active ? occupants[roomNumber].childCount : 0}
          data-testid="child-count-select"
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </label>
    </SelectInputsWrapper>
  );
};

OccupantsSelect.propTypes = {
  handleOccupantSelect: PropTypes.func.isRequired,
  occupants: PropTypes.shape({
    room: PropTypes.shape({
      adultCount: PropTypes.number.isRequired,
      childCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
  roomCount: PropTypes.number.isRequired,
  roomNumber: PropTypes.number.isRequired,
};

export default OccupantsSelect;
