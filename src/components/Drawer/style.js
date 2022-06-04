import styled from 'styled-components'

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
    width: 350px;
    height: 100%;
    background-color: rgb(0, 96, 177);
    ::after{
        content:'X';
        position: relative;
        top: -2%;
        left:115%;
        color:white;
        font-size:1.5em;
    }
`
export const DrawerNav = styled.nav``
export const DrawerList = styled.ul``