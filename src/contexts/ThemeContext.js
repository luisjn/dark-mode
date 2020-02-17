import React, { createContext, useState } from 'react';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState({
    palette: { type: 'light' }
  });

  const muiTheme = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={muiTheme}>
      { props.children }
    </MuiThemeProvider>
  );
}

export default ThemeContextProvider;