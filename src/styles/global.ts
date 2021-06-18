import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    }

    body {
        background-color: ${props => props.theme.colors.background};
        font-size: 14px;
        color: ${props => props.theme.colors.text};
        font-family: sans-serif;

        width: 100%;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;