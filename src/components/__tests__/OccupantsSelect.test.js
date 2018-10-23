import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import OccupantsSelect from '../OccupantsSelect';
import roomsFixture from '../../roomsFixture';
import 'jest-dom/extend-expect';

test('<OccupantsSelect> inactive', () => {
  const wrapper = (
    <OccupantsSelect
      handleOccupantSelect={jest.fn}
      occupants={roomsFixture.occupants}
      roomCount={1}
      roomNumber={2}
    />
  );

  const { getByTestId } = render(wrapper);
  const adultCountSelect = getByTestId('adult-count-select');
  const childCountSelect = getByTestId('child-count-select');

  expect(adultCountSelect).toBeDisabled();
  expect(childCountSelect).toBeDisabled();

  expect(adultCountSelect.value).toBe('1');
  expect(childCountSelect.value).toBe('0');
});
