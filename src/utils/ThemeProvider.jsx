import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();


const initialState = {
    darkTheme: true,
};

const themeReducer = (state, action) => {
    switch (action.type) {
      case "light":
        return { darkTheme: false };
      case "dark":
        return { darkTheme: true };
      default:
        return state;
    }
  };


export function ThemeProvider(props) {
    const [state, dispatch] = useReducer(themeReducer, initialState);
  
    return <ThemeContext.Provider value={{ state, dispatch }}>{props.children}</ThemeContext.Provider>;
  }
  