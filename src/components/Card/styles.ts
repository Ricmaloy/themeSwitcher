import styled, { keyframes } from 'styled-components';

const float = keyframes`
    0% {
        transform: translateY(50px);
    }
    50% {
        transform: translateY(-50px);
    }
    100% {
        transform: translateY(50px);
    }
`;

const floatLess = keyframes`
    0% {
        transform: translateY(20px);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(20px);
    }
`;

export const CardContainer = styled.main`
    width: 25vw;
    height: 70vh;

    font-family: Poppins, sans-serif;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 5px;

    box-shadow: 0px 0px 8px rgba(0,0,0, .2);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    transform-style: preserve-3d;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        color: white;
        transform: translateZ(120px);

        @media(max-width: 1420px) {
            font-size: 14px;
        }

        img {
            width: 90px;
            border-radius: 50%;

            margin-bottom: 40px;
        }

        .imageContainer {
            &::before {
                content: '';
                display: block;
                width: 100px;
                height: 100px;
                border: 1px solid #171717;

                position: absolute;
                top: 0;
                left: 0;

                background-color: #fff;
                border-radius: 50%;
                z-index: -1;

                transform: translate(-5px, -5px);

                @media(max-width: 1420px) {
                    transform: translate(-6px, -6px);
                }
            }
        }

        span {
            font-size: 35px;
            position: absolute;

            animation: ${float} 8s backwards infinite;

            @media(max-width: 1420px) {
                font-size: 20px;
                animation: ${floatLess} 4s backwards infinite;
            }

            &.emoji {
                &--1 {
                    top: -45px;
                    left: -255px;
                    animation-delay: .0s;

                    @media(max-width: 1420px) {
                        top: -45px;
                        left: -155px;
                    }
                }
                &--2 {
                    top: -55px;
                    left: 385px;
                    animation-delay: .2s;

                    @media(max-width: 1420px) {
                        top: -15px;
                        left: 185px;
                    }
                }
                &--3 {
                    top: -175px;
                    left: 185px;
                    animation-delay: .4s;

                    @media(max-width: 1420px) {
                        top: -75px;
                        left: 105px;
                    }
                }
                &--4 {
                    top: -95px;
                    left: -45px;
                    animation-delay: .6s;

                    @media(max-width: 1420px) {
                        top: -15px;
                        left: -45px;
                    }
                }
                &--5 {
                    top: 45px;
                    left: -135px;
                    animation-delay: .8s;
                }
                &--6 {
                    top: -185px;
                    left: -165px;
                    animation-delay: .1s;

                    @media(max-width: 1420px) {
                        top: -85px;
                        left: -85px;
                    }
                }
                &--7 {
                    top: -225px;
                    left: -5px;
                    animation-delay: .3s;

                    @media(max-width: 1420px) {
                        top: -105px;
                        left: 20px;
                    }
                }
                &--8 {
                    top: -75px;
                    left: 245px;
                    animation-delay: .5s;
                }
                &--9 {
                    top: 45px;
                    left: 285px;
                    animation-delay: .7s;
                }
                &--10 {
                    top: -195px;
                    left: 345px;
                    animation-delay: .9s;

                    @media(max-width: 1420px) {
                        top: -95px;
                        left: 175px;
                    }
                }
            }
        }
    }
`;

export const ThemeContainer = styled.footer`
    width: 25vw;
    font-family: Poppins, sans-serif;

    text-align: center;

    margin-top: 30px;
`;

export const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row!important;
    justify-content: space-evenly!important;

    margin-top: 50px;

    a {
        text-decoration: none;
        color: #fff;

    }
`;
