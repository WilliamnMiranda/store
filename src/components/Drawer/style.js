import styled from "styled-components";
import { keyframes } from "styled-components";
const animMenu = keyframes`
    0% {
     transform: translateX(-360px);
    }

    100% {
        transform: translateY(0px);
    }
`;
export const ContainerDrawer = styled.div`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  position: absolute;
  z-index: 10;
`;

export const TituloDrawer = styled.h1`
    margin-bottom: 20px;
`;
export const DrawerComponent = styled.aside`
  position: fixed;
  padding: 30px;
  animation: ${animMenu} 0.5s;
  width: 350px;
  height: 100%;
  background-color: rgb(0, 96, 177);
`;
export const DrawerNav = styled.nav``;
export const DrawerList = styled.ul``;
export const DrawerItem = styled.li`
    color: white;
    margin-bottom: 30px;
`;
export const CloseDrawer = styled.div`
  position: absolute;
  top: 4%;
  left: 110%;
  color: white;
  font-size: 1.5em;
  cursor: pointer;
`;
export const ButtonLogin = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  border: 1px solid rgb(255, 101, 0);
  background-color: rgb(255, 101, 0);
  user-select: none;
  color: rgb(255, 255, 255);
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.3s ease 0s;
  border-radius: 0.25rem;
`;

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        text-transform: uppercase;
        color:white;
        margin-top: 20px;
        font-size: 1.4em;
    }
`