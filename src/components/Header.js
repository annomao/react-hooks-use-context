import React, { useContext } from "react";
import ThemedButton from "./ThemedButton";
import DarkModeToggle from "./DarkModeToggle";
import defaultUser from "../data";
import { UserContext } from "../context/user";
import { ThemeProvider } from "../context/theme";

function Header() {

  const { user, setUser } = useContext(UserContext)

  function handleLogin() {
    if (user) {
      setUser(null);
    } else {
      setUser(defaultUser);
    }
  }

  return (
    <header>
      <h1>React Context</h1>
      <nav>
        <ThemeProvider>

        <ThemedButton onClick={handleLogin}>
          {user ? "Logout" : "Login"}
        </ThemedButton>

        <DarkModeToggle />
        </ThemeProvider>
      </nav>
    </header>
  );
}

export default Header;
