import React, {useState} from "react"
import { createContext } from "react/cjs/react.production.min"

const ThemeContext = createContext();

function ThemeProvider({children}){
let [theme, setTheme] = useState("dark")
return (
  <ThemeContext.Provider value={{ theme, setTheme }}>
    {children}
  </ThemeContext.Provider>
);
}

export {ThemeContext,ThemeProvider}