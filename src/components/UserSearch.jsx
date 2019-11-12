import React from 'react';
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

  inputRef = React.createRef();

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

    this.setState(
      {userName: this.inputRef.current.value, isLoading: true},
      () => this.getFetchData()
    );
  };

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
                    ref={this.inputRef}
                    placeholder="Search for a Github profile..."
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
                      <span class="sr-only">Loading...</span>
                    </button>
                  ) : (
                    <button className="btn btn-success" type="submit">
                      Search
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="container">
            {this.state.errorText && <ErrorText error={this.state.errorText} />}
            <div id="users-container" className="row pt-3 flex-wrap ">
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
