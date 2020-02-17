import React, { useState } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Demo from "./components/Demo";
import Navbar from "./components/Navbar";

const Theme = () => {
  const [theme, setTheme] = useState({
    palette: {
      type: "light"
    }
  });

  const toggleDarkTheme = () => {
    let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
    setTheme({
      palette: {
        type: newPaletteType
      }
    });
  };

  const muiTheme = createMuiTheme(theme);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <Navbar type={theme.palette.type} onToggleDark={toggleDarkTheme} />
      <Demo onToggleDark={toggleDarkTheme} />
    </MuiThemeProvider>
  );
};

export default Theme;