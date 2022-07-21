import styled from 'styled-components'

export const ContainerCart = styled.main`
    margin-top: 35px;
    width: 100%;
`

export const ContainerBuscaDeLocalidade = styled.div`
background-color: white;
padding: 30px;
h2 {
  span {
    margin-right: 5px;
    color: rgb(255, 101, 0);
    font-size: 0.9em;
  }
  font-weight: bold;
  padding:  10px 0px;
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
    margin: 20px 10px 0px 0px;
    padding: 10px;
    font-size: 1.2em;
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
export const ContainerMain = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const SectionMain = styled.div`
  width: 75%;
`
export const Aside = styled.aside`
  padding: 20px;
  width: 20%;
  background-color: white;
`

export const Endereco= styled.p`
  margin-top: 20px;
`

export const ContainerProdutos = styled.section`
  margin-top: 30px;
  width: 100%;
  background-color: red;
  height: 20px;
`