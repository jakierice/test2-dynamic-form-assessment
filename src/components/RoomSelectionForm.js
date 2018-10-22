import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class extends Component {
  state = {
    ...this.props.initialValues,
  };

  setOccupants = ({ roomNumber, adultCount, childCount }) => {
    console.log('setOccupants', { roomNumber, childCount, adultCount });
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
    this.setState({ roomCount: roomNumber });
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
