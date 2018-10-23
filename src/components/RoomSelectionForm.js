import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  static propTypes = {
    initialRoomsData: PropTypes.shape({
      roomCount: PropTypes.number.isRequired,
      occupants: PropTypes.shape({
        room: PropTypes.shape({
          adultCount: PropTypes.number.isRequired,
          childCount: PropTypes.number.isRequired,
        }),
      }),
    }),
  };

  state = {
    ...this.props.initialRoomsData,
  };

  setOccupants = ({ roomNumber, adultCount, childCount }) => {
    this.setState(prevState => ({
      occupants: {
        ...prevState.occupants,
        [roomNumber]: {
          adultCount,
          childCount,
        },
      },
    }));
  };

  setRoomCount = roomNumber => {
    this.setState(prevState => {
      const currentlyActive = prevState.roomCount === roomNumber;

      return { roomCount: currentlyActive ? roomNumber - 1 : roomNumber };
    });
  };

  submitRooms = e => {
    e.preventDefault();
    const stringRooms = JSON.stringify(this.state);

    sessionStorage.setItem('rooms', stringRooms);
  };

  render() {
    return (
      <form>
        {this.props.children({
          roomCount: this.state.roomCount,
          occupants: this.state.occupants,
          setRoomCount: this.setRoomCount,
          setOccupants: this.setOccupants,
          submitRooms: this.submitRooms,
        })}
      </form>
    );
  }
}
