import React from 'react';
import './UserProfile.css';

class Sidebar extends React.Component {
  render() {
    const {login, avatar_url, id, score, type} = this.props;
    return (
      <div id="sidebar" className="w-25">
        <div className="card sidebar-card">
          <img
            src={avatar_url}
            alt="avatar"
            id="sidebar-avatar"
            className="card-img-top"
          />
          <div className="card-body">
            <h1 className="card-title">{login}</h1>
            <p className="card-text">User type: {type}</p>
            <p className="card-text">Id: {id}</p>
            <p className="card-text">Score: {score}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
