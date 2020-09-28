import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { ColorContext } from "../context/ColorContext";
import Headline from "./Headline";

import * as API from "../api";
import ErrorText from "./ErrorText";
import UserItem from "./UserItem";
import "../index.css";
import "./UserSearch.css";
import { currentTheme } from "./../context/ColorContext";

function UserSearchFunctional(props) {
  const colorContext = useContext(ColorContext);

  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
  const stateInfo = useContext(ColorContext);


  console.log("context", colorContext);
  console.log(colorContext.theme);

  useEffect(() => {
    console.log("effect", colorContext.theme);
  }, [colorContext.theme]);

  const getFetchData = async () => {
    setIsLoading(true);
    const response = await API.fetchUser(userName);
    if (typeof response === "string") {
      setErrorText(response);
    }
    const users = response.items;
    setUsers(users);
    setIsLoading(false);
    if (users.length === 0) {
      setErrorText("No results");
    }
  };

  const handleFormSubmit = (event) => {
    setErrorText("");
    event.preventDefault();

    setIsLoading(true);
    getFetchData();
  };

  const handleChange = (e) => {
    setUserName(e.currentTarget.value);
  };

//   const handleThemeChange = (colorContext.theme) => {
//     console.log("changing theme clicked", colorContext.theme);
//     colorContext.changeTheme(colorContext.theme);
//   };

  return (
    // <LangContext.Consumer value={this.state.value} >
    <ColorContext.Consumer>
      {(ColorContext) => (
        <React.Fragment>
          {/* <LangProvider>
        <LangConsumer>
        {({ lang }) => <h1>The language is {lang}</h1>}
        </LangConsumer>
        </LangProvider>
      <Header /> */}
          <div
            className={
              colorContext.theme === "dark"
                ? "dark-theme page-container"
                : "light-theme page-container"
            }
          >
            <header
              className={colorContext.theme === "dark" ? "dark-theme" : "light-theme"}
            >
              The theme right now is {colorContext.theme} Change to:{" "}
              <span onClick={() => ColorContext.changeColor(colorContext.theme)}>
                {colorContext.theme === "dark" ? "light" : "dark"}
              </span>
            </header>
            <div id="search-bar">
              <div className="to-center">
                <Headline theme={colorContext.theme} />

                <form onSubmit={handleFormSubmit} id="main-search-form">
                  <div className="form-group">
                    <input
                      className={
                        colorContext.theme === "dark"
                          ? "dark-theme form-control"
                          : "light-theme form-control"
                      }
                      type="text"
                      name="userName"
                      onChange={handleChange}
                      placeholder="Search for a profile..."
                      required
                    />
                  </div>
                  <div id="button-container">
                    {isLoading ? (
                      <button
                        className="btn btn-success"
                        type="button"
                        disabled
                      >
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

            <div
              className={
                colorContext.theme === "dark"
                  ? "dark-theme container"
                  : "light-theme container"
              }
            >
              {errorText && <ErrorText error={errorText} />}
              <div id="users-container" className="row flex-wrap ">
                {users.map((user) => (
                  <UserItem
                    key={user.id}
                    login={user.login}
                    avatar_url={user.avatar_url}
                    url={user.url}
                    score={user.score}
                    type={user.type}
                    id={user.id}
                    theme={colorContext.theme}
                  />
                ))}
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </ColorContext.Consumer>
  );
}

export default UserSearchFunctional;
