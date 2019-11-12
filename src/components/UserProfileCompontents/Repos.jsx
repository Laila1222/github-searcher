import React from 'react';

class Repos extends React.Component {
  render() {
    const {id, html_url, name, description} = this.props;
    return (
      <div key={id} className="list-group-item list-group-item-action">
        <a
          className=""
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <p>{description}</p>
      </div>
    );
  }
}

export default Repos;
