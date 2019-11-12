import React from 'react';
import * as API from '../../api';
import Header from '../Header';
import Sidebar from './Sidebar';
import MainSide from './MainSide';

class UserProfile extends React.Component {
  state = {
    user: [],
  };

  async componentDidMount() {
    const response = await API.fetchUser(this.props.id);
    const user = response.items[0];
    await this.setState({user});
  }

  render() {
    console.log(this.state.user);
    const {
      login,
      avatar_url,
      id,
      score,
      type,
      followers_url,
      following_url,
      organizations_url,
      repos_url,
      starred_url,
    } = this.state.user;
    return (
      <React.Fragment>
        <Header />
        <div id="main-container" className="custom-container d-flex">
          <Sidebar
            avatar_url={avatar_url}
            login={login}
            id={id}
            score={score}
            type={type}
          />
          <MainSide
            followers_url={followers_url}
            following_url={following_url}
            organizations_url={organizations_url}
            repos_url={repos_url}
            starred_url={starred_url}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default UserProfile;
