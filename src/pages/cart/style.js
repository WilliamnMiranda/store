import styled from 'styled-components'

export const ContainerCart = styled.main`
    margin-top: 35px;
    width: 100%;
    height: 300px;
`

export const ContainerBuscaDeLocalidade = styled.div`
h2 {
  span {
    margin-right: 5px;
    color: rgb(255, 101, 0);
    font-size: 0.9em;
  }
  font-weight: bold;
  padding:  5px 0px;
  display: flex;
  align-items: center;
}
`

export const ContainerBuscar = styled.div`
    input{
    height: 48px;
    width: 300px;
    background-color: transparent;
    border: 1px solid rgb(222, 224, 228);
    margin: 10px 10px 0px 0px;
    }
    button{
    height: 48px;
    width: 48px;
    color:white;
    font-weight: bold;
    border-radius: 10px;
    border: 1px solid rgb(255, 101, 0);
    background-color: rgb(255, 101, 0);
    margin-right: 10px;
    }
    a{
        text-decoration: underline;
        color: rgb(255, 101, 0);
        :hover{
            text-decoration: none;
        }
    }
`