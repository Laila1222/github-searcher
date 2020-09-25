import React  from 'react';
import * as API from '../api';
import ErrorText from './ErrorText';
import UserItem from './UserItem';
import '../index.css';
import './UserSearch.css';
import Headline from './Headline';

class UserSearch extends React.Component {

  state = {
    users: [],
    userName: '',
    isLoading: false,
    errorText: '',
  };


  async getFetchData() {
    this.setState({isLoading: true});
    const response = await API.fetchUser(this.state.userName);
    if (typeof response === 'string') {
      this.setState({errorText: response});
    }
    const users = response.items;
    this.setState({users, isLoading: false});
    if (this.state.users.length === 0) {
      this.setState({errorText: 'No results'});
    }
  }

  handleFormSubmit = event => {
    this.setState({errorText: ''});
    event.preventDefault();

    this.setState({isLoading: true});
    this.getFetchData();

  
  };

  handleChange = (e) => {
    this.setState({userName: e.currentTarget.value});
    console.log(this.state.userName);
  }

  render() {
    return (
      // <LangContext.Consumer value={this.state.value} >
      <React.Fragment>
        {/* <LangProvider>
          <LangConsumer>
          {({ lang }) => <h1>The language is {lang}</h1>}
          </LangConsumer>
          </LangProvider>
        <Header /> */}
        <div>
          <div id="search-bar">
            <div className="to-center">
              <Headline />

              <form onSubmit={this.handleFormSubmit} id="main-search-form">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="userName"
                    onChange={this.handleChange}
                    placeholder="Search for a profile..."
                    required
                  />
                </div>
                <div id="button-container">
                  {this.state.isLoading ? (
                    <button className="btn btn-success" type="button" disabled>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span className="sr-only">Loading...</span>
                    </button>
                  ) : (
                    <button className="btn btn-success mt-4" type="submit">
                      Search
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="container">
            {this.state.errorText && <ErrorText error={this.state.errorText} />}
            <div id="users-container" className="row flex-wrap ">
              {this.state.users.map(user => (
                <UserItem
                  key={user.id}
                  login={user.login}
                  avatar_url={user.avatar_url}
                  url={user.url}
                  score={user.score}
                  type={user.type}
                  id={user.id}
                />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserSearch;
