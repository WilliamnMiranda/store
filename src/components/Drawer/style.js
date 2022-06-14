import styled from 'styled-components'
import { keyframes } from 'styled-components';
const animMenu = keyframes`
    0% {
     transform: translateX(-360px);
    }

    100% {
        transform: translateY(0px);
    }
`;
export const ContainerDrawer= styled.div`
    width: 100%;
    background-color: rgba(0,0,0,0.3);
    height: 100%;
    position: absolute;
    z-index: 10;
`

export const TituloDrawer = styled.h1``
export const DrawerComponent = styled.aside`
    position: fixed;
    padding: 30px 20px;
    animation: ${animMenu} .5s;
    width: 350px;
    height: 100%;
    background-color: rgb(0, 96, 177);
`
export const DrawerNav = styled.nav``
export const DrawerList = styled.ul``
export const CloseDrawer = styled.div`
        position: absolute;
        top: 4%;
        left:110%;
        color:white;
        font-size:1.5em;
        cursor: pointer;
`