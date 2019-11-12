import React from 'react';

class Organizations extends React.Component {
  render() {
    const {id, avatar_url, login, url, description} = this.props;
    return (
      <div key={id} className="ui card org-card">
        <div className="image">
          <a href={url}>
            <img
              className="org-image"
              src={avatar_url}
              alt="organization-avatar"
            />
          </a>
        </div>
        <div className="content">
          <a className="header" href={url}>
            {login}
          </a>
          <div className="description">{description}</div>
        </div>
      </div>
    );
  }
}

export default Organizations;
