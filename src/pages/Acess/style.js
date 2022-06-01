import styled from 'styled-components'

export const ContainerAcesso = styled.section`
  margin: 0 auto;
  width: 80%;
`
export const TituloAcesso = styled.h1`
  font-weight: bold;
  padding:35px 10px;
  color: rgb(66, 70, 77);
  & svg{
    color: rgb(255, 101, 0);
    font-size: 1.1em;
  }
`
export const Divisor = styled.div`
  width: 2px;
  background-color: red;
  height: 400px;
  margin:0px 20px;
`
export const ContainerGeral = styled.div`
  display: flex;
  align-items: flex-start;
`