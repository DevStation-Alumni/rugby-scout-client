import React from 'react';
import { Image } from 'react-bootstrap';

export default class ActionButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {

  }

  render() {
    return (
      <Image src={this.props.src} onClick={this.handleClick} />
    );
  }
}