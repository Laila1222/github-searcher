import React from 'react';
import Repos from './Repos';
import Followers from './Followers';
import Organizations from './Organizations';
import Loader from '../Loader';

class ActiveMenu extends React.Component {
  state = {
    data: [],
    url: 'initial',
    isLoading: true,
  };

  async componentDidMount() {
    this.setState({isLoading: true});
    const changeUrl = new Promise(() => {
      setTimeout(() => {
        this.setState({url: this.props.url});
      }, 1000);
    });

    const fetchData = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fetch(this.state.url)) {
          fetch(this.state.url)
            .then(res => res.json())
            .then(data => this.setState({data}));
          this.setState({isLoading: false});
        } else {
          console.log('error in fetching data');
        }
      }, 2000);
    });

    await Promise.resolve(changeUrl);
    await Promise.resolve(fetchData);
  }

  render() {
    console.log(this.state.isLoading);
    console.log(this.state.url);
    console.log(this.state.data);
    return (
      <div className="">
        <h2 id="active-menu-name" className="text-center">
          {this.props.activeMenuName}
        </h2>
        {this.state.isLoading && (
          <div className="ml-auto  w-50">
            <Loader />
          </div>
        )}

        <div className="list-group">
          {this.props.activeMenuName === 'Repositories' &&
            this.state.data.map(repo => (
              <Repos
                key={repo.id}
                html_url={repo.html_url}
                name={repo.name}
                description={repo.description}
              />
            ))}
        </div>
        {this.props.activeMenuName === 'Starred' && (
          <p>This is some weird url from the api, that doesnt work as it is.</p>
        )}
        {this.props.activeMenuName === 'Followers' && (
          <React.Fragment>
            <div className="w-100 d-flex flex-wrap  justify-content-around">
              {this.state.data.map(follower => (
                <Followers
                  key={follower.id}
                  url={follower.url}
                  avatar_url={follower.avatar_url}
                  login={follower.login}
                />
              ))}
            </div>
          </React.Fragment>
        )}
        {this.props.activeMenuName === 'Organizations' &&
          this.state.data.map(org => (
            <Organizations
              key={org.key}
              login={org.login}
              url={org.url}
              description={org.description}
              avatar_url={org.avatar_url}
            />
          ))}
      </div>
    );
  }
}

export default ActiveMenu;
