import styled from 'styled-components'

export const Container = styled.div`
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  height: 100px;
  background: rgb(0, 96, 177);
  width: 100%;
`

export const ContainerMenu = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  width: 80%;
  margin : 0 auto;
`
export const ContainerLista = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
`
export const IconMenu = styled.li`
  font-size: 2.2em;
  margin-right:15px;
`
export const Logo = styled.li``
export const ContainerInput = styled.div`
  @media(max-width:  1250px) {
    display: none;
  }
  & input{
    width: 550px;
    border: none;
    outline: none;
    font-size: 0.875rem;
    line-height: 1.3125rem;
    height: 2.0rem;
    padding: 12px 16px;
    background: rgb(255, 255, 255);
    color: rgb(66, 70, 77);
    border-radius: 0.25rem;
  }
`
export const ContainerUser = styled.div`
  color: rgba(255, 255, 255, 0.8);
  @media(max-width:  1250px) {
    display: none;
  }
`

export const ContainerLogin = styled.div`
  display:flex;
  align-items: center;
`

export const ContainerLogoUser = styled.div`
color:grey;
font-size: 2.0em;
margin-right: 10px;
`

export const ContainerAccess = styled.div`
  margin-right: 10px;
 & a:visited {
   color: rgba(255, 255, 255, 0.8);
 }
 & a {
   font-weight: 300;
 }
 & p{
   font-size: 0.8em;
 }
`

export const ContainerIcons = styled.div`
  & svg{
    margin:0px 20px;
    font-size: 1.4em;
  }
`