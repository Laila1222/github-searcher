import React from "react";

export const themes = {
  light: "light",
  dark: "dark",
};

export const changeTheme = (currentColor) => {
  console.log("from context", currentColor);
};

export const ColorContext = React.createContext({
  theme: themes.dark,
  changeTheme: () => {},
});

// export default ColorContext;
