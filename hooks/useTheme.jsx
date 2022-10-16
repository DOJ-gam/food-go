import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { theme1, theme2 } from "../constants/theme";

const useAppTheme = () => {
  const { theme } = useContext(ThemeContext);

  let appTheme;
  if (theme === "theme1") appTheme = theme1;
  if (theme === "theme2") appTheme = theme2;
  return appTheme;
};

export default useAppTheme;
