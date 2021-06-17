import { Header } from "./components/Header";
import GlobalStyle from './styles/global';

import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme()
  return (
      <>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Header />
      </ThemeProvider>
      </>
    );
}

export default App;
