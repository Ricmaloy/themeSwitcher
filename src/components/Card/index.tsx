import Switch from 'react-switch';
import { shade } from 'polished';
import { useTheme } from '../../hooks/useTheme';
import Tilt from 'react-parallax-tilt';
import { FaTwitter, FaGithub, FaLinkedin, FaTwitch } from 'react-icons/fa';

import { CardContainer, ThemeContainer, IconsContainer } from './styles';

export const Card = () => {
    const { theme, toggleTheme } = useTheme();

    const handleChangeTheme = () => {
        toggleTheme();
    }

    return (
        <>
        
        <Tilt
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor={`${theme.colors.secundary}`}
            glarePosition="all"
            glareBorderRadius="5px"
            perspective={1800}
            style={{transformStyle:"preserve-3d"}}
            >
            <CardContainer >
                <div>
                    <div className="imageContainer">
                        <img src="https://github.com/ricmaloy.png" alt="me" />
                    </div>
                    <div>Ricardo Zamboni Silva</div>
                    <div>Dev Front-End</div>
                    <IconsContainer>
                        <a href="https://github.com/Ricmaloy"><FaGithub /></a>
                        <a href="https://twitter.com/Ricardo_Zamboni"><FaTwitter /></a>
                        <a href="https://www.twitch.tv/ricmaloy"><FaTwitch /></a>
                        <a href="https://www.linkedin.com/in/ricardo-zamboni-3906471b3/"><FaLinkedin /></a>
                    </IconsContainer>
                <span className="emoji--1" >🚀</span>
                <span className="emoji--2" >🖖</span>
                <span className="emoji--3" >🙏🏻</span> 
                <span className="emoji--4" >👩🏻‍💻</span>
                <span className="emoji--5" >👍🏻</span>
                <span className="emoji--6" >👾</span>
                <span className="emoji--7" >🧙</span>
                <span className="emoji--8" >🎮</span>
                <span className="emoji--9" >🥇</span>
                <span className="emoji--10" >🧝🏻</span>
                </div>
            </CardContainer>
        </Tilt>

        <ThemeContainer>
            <p>Tema: <span>{theme.title}</span></p>
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
        </ThemeContainer>
        </>
    )
}