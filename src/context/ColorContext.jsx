import React from 'react';

export const currentTheme = 'dark';

const ColorContext = React.createContext(currentTheme);

export default ColorContext;