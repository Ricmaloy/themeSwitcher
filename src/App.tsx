import { Header } from "./components/Header";
import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { usePersistedState } from './hooks/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toogleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
