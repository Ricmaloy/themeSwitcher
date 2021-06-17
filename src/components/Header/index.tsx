import Switch from 'react-switch';
import { shade } from 'polished';
import { Container } from './styles';

import { useTheme } from '../../hooks/useTheme';

export const Header = () => {
    const { theme, toggleTheme } = useTheme();

    const handleChangeTheme = () => {
        toggleTheme();
    }
    
    return (
        <Container>
            Hello World

            <Switch 
              onChange={handleChangeTheme}
              checked={theme.title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={15}
              width={40}
              handleDiameter={20}
              onColor={theme.colors.secundary}
              offColor={shade(0.25, theme.colors.primary)}
            />
        </Container>
    );
}