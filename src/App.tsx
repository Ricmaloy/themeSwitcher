import { Card } from "./components/Card";
import GlobalStyle from './styles/global';

import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme()
  return (
      <>
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Card />
      </ThemeProvider>
      </>
    );
}

export default App;
