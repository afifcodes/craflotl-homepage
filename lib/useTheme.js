import { useContext, useEffect } from "react";
import { GlobalContext } from "./GlobalContext";

export default function useTheme() {
  const { theme, setTheme } = useContext(GlobalContext);

  const toggleDarkMode = () => {
    document.documentElement.classList.replace(
      theme === "light" ? "light" : "dark",
      theme === "light" ? "dark" : "light"
    );
    localStorage.setItem(
      "craflotl-theme",
      theme === "light" ? "dark" : "light"
    );
    setTheme(theme === "light" ? "dark" : "light");
  };

  return [theme, toggleDarkMode];
}
