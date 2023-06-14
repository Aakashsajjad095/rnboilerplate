import React, { createContext, useEffect, useReducer } from "react";
import { lightTheme } from './lightTheme'
import { darkTheme } from './darkTheme'
type ThemeContextType = "light" | "dark" | any;
export const ThemeContext = createContext<ThemeContextType>('light');

const themeReducer = (state: any, action : any) => {
    console.log("action.type:::::", action.type)
    switch (action.type) {
        case "LIGHTMODE":
            return { theme: lightTheme };
        case "DARKMODE":
            return { theme: darkTheme };
        default:
            return state;
    }
};
export function ThemeProvider(props : any) {


    const [state, dispatch] = useReducer(themeReducer, { theme: props.scheme === 'dark' ? darkTheme : lightTheme });

    useEffect(() => {
        console.log("Color::: ", state)
    }, [state, props.scheme])

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    )
}