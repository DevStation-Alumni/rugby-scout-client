import React from 'react';
import { Image } from 'react-bootstrap';

export default class ActionButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.api.fetchResultsRequest(this.props.query);
  }

  render() {
    return (
      <Image className="action-image" src={this.props.src} onClick={this.handleClick} />
    );
  }
}