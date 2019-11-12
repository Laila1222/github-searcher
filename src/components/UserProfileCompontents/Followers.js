import React from 'react';

class Followers extends React.Component {
  render () {
    const {login, url, avatar_url} = this.props;
    return (
      <div className="card w-25 mx-2 my-2">
        <a href={url}>
          <img
            src={avatar_url}
            alt="followers-avatar"
            className="followers-image w-100"
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{login}</h5>

        </div>
      </div>
    );
  }
}

export default Followers;
