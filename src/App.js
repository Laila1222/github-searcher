import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserSearch from "./components/UserSearch";
import UserProfile from "./components/UserProfileCompontents/UserProfile";
import Header from "./components/Header";
import Sidebar from "./components/UserProfileCompontents/Sidebar";
import MainSide from "./components/UserProfileCompontents/MainSide";
import "./App.css";
import { ColorContext, themes } from "./context/ColorContext";
import UserSearchFunctional from "./components/UserSearchFunctional";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };

    this.state = {
      theme: themes.dark,
      changeColor: this.changeColor,
    };
  }

  render() {
    return (
      <ColorContext.Provider value={this.state}>
        <Router>
          <Switch>
            <Route exact path="/">
              {/* <UserSearch /> */}
              <UserSearchFunctional />
            </Route>

            <Route
              exact
              path="/user/:id/"
              render={({ match }) => (
                <UserProfile id={match.params.id}>
                  <Header />

                  <div id="main-container">
                    <Sidebar id={match.params.id} />
                    <MainSide id={match.params.id} />
                  </div>
                </UserProfile>
              )}
            />
          </Switch>
        </Router>
      </ColorContext.Provider>
    );
  }
}

export default App;
