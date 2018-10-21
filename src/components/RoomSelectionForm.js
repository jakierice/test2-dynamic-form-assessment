import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  state = {
    roomCount: 1,
  };

  setRoomCount = roomNumber => {
    this.setState({ roomCount: roomNumber });
  };

  render() {
    return this.props.children({
      roomCount: this.state.roomCount,
      setRoomCount: this.setRoomCount,
    });
  }
}
