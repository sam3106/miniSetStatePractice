import React from 'react';
import './index.css';
class Body extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div>{this.props.message}</div>;
  }
}

export default Body;
