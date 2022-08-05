import styled from 'styled-components'

export const ContainerAcess = styled.section`
  margin: 0 auto;
  width: 65%;
  overflow: hidden;
  @media(max-width:  1250px) {
      width: 100%;
  }

`
export const TituloAcess = styled.h1`
  font-weight: bold;
  padding:35px 0px;
  color: rgb(66, 70, 77);
  & svg{
    color: rgb(255, 101, 0);
    font-size: 1.1em;
  }
`
export const Divider = styled.div`
  width: 2px;
  background-color: rgb(242, 243, 244);
  height: 650px;
  margin:0px 20px;
  @media(max-width:  1250px) {
    display: none;
  }
`
export const ContainerGeneral = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  @media(max-width:  1250px) {
    flex-direction: column;
    width: 100%;
  }
`