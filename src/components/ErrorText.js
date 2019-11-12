import React from 'react';
// import './UserSearch.css';

class ErrorText extends React.Component {
  render () {
    console.log (this.props);
    return (
      <div id="error-text">
        {this.props.error === 'Forbidden'
          ? <React.Fragment>
              <h3>Ho, there is an error. </h3>

            </React.Fragment>
          : <div className="no-result-div center-text shadow p-3 mb-5 bg-white rounded">
              <img id="no-result-img" src="./search.png" alt="search" />
              <div className="">{this.props.error}</div>
            </div>}

      </div>
    );
  }
}

export default ErrorText;
