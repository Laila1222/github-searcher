import React from 'react';
import './UserProfile.css';

class MenuItem extends React.Component {
  render () {
    return (
      <button
        className="remove-def-style p-3 text-primary menuItem"
        onClick={this.props.onClick}
        name={this.props.name}
      >
        {this.props.name}
      </button>
    );
  }
}
export default MenuItem;
