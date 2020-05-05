import React from 'react';
import MenuItem from './MenuItem';
import './UserProfile.css';
import ActiveMenu from './ActiveMenu';

class MainSide extends React.Component {
  state = {
    activeItem: 'Repositories',
    url: '',
    activeMenuName: 'Repositories',
  };

  handleMenuClick = event => {
    this.setState({activeItem: event.target.name});
    const {repos_url, followers_url, organizations_url} = this.props;

    switch (this.state.activeItem) {
      case 'Repositories':
        this.setState({url: repos_url});
        break;

      case 'Organizations':
        this.setState({url: organizations_url});
        console.log('orga');
        break;

      case 'Followers':
        this.setState({url: followers_url});
        break;

      default:
        this.setState({url: repos_url});
    }
  };

  componentDidMount() {
    this.setState({url: this.props.repos_url});
  }

  render() {
    return (
      <div id="mainside-container" className="w-75  p-3">
        <nav className="">
          <div className="">
            <MenuItem name="Repositories" onClick={this.handleMenuClick} />
            <MenuItem name="Organizations" onClick={this.handleMenuClick} />
            <MenuItem name="Followers" onClick={this.handleMenuClick} />
          </div>
        </nav>
        <hr id="menu-line"></hr>

        <div id="data-container">
          {this.state.activeItem === 'Repositories' && (
            <ActiveMenu
              activeMenuName={this.state.activeItem}
              url={this.props.repos_url}
            />
          )}
          {this.state.activeItem === 'Organizations' && (
            <ActiveMenu
              activeMenuName={this.state.activeItem}
              url={this.props.organizations_url}
            />
          )}
          {this.state.activeItem === 'Followers' && (
            <ActiveMenu
              activeMenuName={this.state.activeItem}
              url={this.props.followers_url}
            />
          )}
        </div>
      </div>
    );
  }
}

export default MainSide;
