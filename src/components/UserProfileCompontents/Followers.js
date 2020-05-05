import React from 'react';
import {Link} from 'react-router-dom';

class Followers extends React.Component {
  render () {
    const {login, avatar_url} = this.props;
    const path = `/user/${login}`;
    console.log(path);
    return (
      <div className="card followers-card w-25 mx-2 my-2">
        <Link to={path} onClick={() => window.location.href = path}>
          <img
            src={avatar_url}
            alt="followers-avatar"
            className="followers-image w-100"
          />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{login}</h5>

        </div>
      </div>
    );
  }
}

export default Followers;
