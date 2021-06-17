import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

interface ITheme {
  title: string;

  colors: {
    primary: string;
    secundary: string;

    background: string;
    text: string;
  };
}

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { useTheme };
