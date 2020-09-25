import React from 'react';
import {Link} from 'react-router-dom';
import './UserItem.css';

class UserItem extends React.Component {
  render() {
    const {avatar_url, login, id, score, type, theme } = this.props;
    const path = `/user/${login}`;
    return (
      <div className="card col-12 col-sm-6 col-md-4 col-lg-2 w-25 shadow p-3 bg-white rounder">
        <Link to={path}>
          <img
            alt="avatar"
            src={avatar_url}
            id="avatar"
            className="card-img-top"
          />
        </Link>

        <div className={theme === 'dark' ? 'dark-theme-card card-body': 'light-theme-card card-body'}>
          <Link to={path}>
            <h4 className="card-title">{login}</h4>
          </Link>
          <p className="card-text">Id: {id}</p>
          {/* <a href={url} className="card-text">
            Repo link
          </a> */}
          <p className="card-text">
            <small className="text-muted">Type: {type}</small>
          </p>
          <p className="card-text">
            <small className="text-muted">Score: {score} </small>
          </p>
        </div>
      </div>
    );
  }
}

export default UserItem;
