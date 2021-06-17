import { useState } from 'react';
import { createContext } from 'react';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface IThemeContext {
    toggleTheme(): void ;
    theme: ITheme;
}

interface ITheme {
    title: string,

    colors: {
        primary: string,
        secundary: string,

        background: string,
        text: string,
    },
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider:  React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const storageTheme = localStorage.getItem('theme');

        if(storageTheme) {
            return JSON.parse(storageTheme);
        } else {
            return dark;
        }
    });

    const toggleTheme = () => {
        if(theme.title === 'dark') {
            setTheme(light);
            localStorage.setItem('theme', JSON.stringify(light));
        }else {
            setTheme(dark);
            localStorage.setItem('theme', JSON.stringify(dark));
        }
    }


    return(
        <ThemeContext.Provider value={{toggleTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}


export { ThemeProvider, ThemeContext }