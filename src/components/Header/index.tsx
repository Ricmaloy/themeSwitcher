import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { Container } from './styles';

interface HeaderProps {
    toogleTheme: () => void;
}

export const Header = ({ toogleTheme }:HeaderProps) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            Hello World

            <Switch 
              onChange={toogleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={15}
              width={40}
              handleDiameter={20}
              onColor={colors.secundary}
              offColor={shade(0.15, colors.primary)}
            />
        </Container>
    );
}