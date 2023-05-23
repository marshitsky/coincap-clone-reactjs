import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store";

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((store) => store.theme);

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <input
      type="checkbox"
      onChange={handleTheme}
      label={theme === "light" ? "Dark" : "Light"}
    ></input>
  );
};
