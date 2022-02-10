import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.add(
      localStorage.getItem("craflotl-theme") || "light"
    );
    setTheme(localStorage.getItem("craflotl-theme"));
  }, []);

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
