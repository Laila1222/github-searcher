import React from 'react';

class Loader extends React.Component {
  render () {
    return (
      <div className="spinner-border text-success ml-auto">
        <div className="ui text loader" />
      </div>
    );
  }
}

export default Loader;
