import { createContext, useState, useContext, useEffect } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedMode = localStorage.getItem("isDark");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
