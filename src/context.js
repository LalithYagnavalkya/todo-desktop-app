import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    console.log("activated");
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(theme);
  };

  return (
    <AppContext.Provider value={{ theme, themeToggler }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
