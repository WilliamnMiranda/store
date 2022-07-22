import styled from 'styled-components'

export const ContainerProduto = styled.div`
  margin: 0 auto;
  margin-bottom: 15px;
  border-top: 1px solid rgb(222, 224, 228);
  height: 100px;
  width: 100%;
`
export const ContainerInfosProdutos = styled.div`
  display: flex;
  height: 100%;
`
export const FotoProduto = styled.img`
  width: 15%;
  height: 100%;
  background-color: grey;
`
export const InfoProduto = styled.div`
  height: 100%;
  width: 50%;
  padding:10px;
`
export const Nome = styled.div`
    color:rgb(66, 70, 77);
    font-weight: 600;
    cursor:pointer;

    :hover{
        text-decoration: underline;
    }
`
export const QuantidadeProduto = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p{
    font-size: 0.8em;
    margin-bottom: 5px;
  }
  div{
    display: flex;
  }
  button{
    background-color: transparent;
    border: none;
    color: rgb(255, 101, 0);
    cursor: pointer;
  }
`
export const BotaodiminuirQuantidade = styled.button``
export const BotaoAumentarQuantidade = styled.button``
export const QuantidadeDoProduto = styled.div`
font-size: 0.9em;
position: relative;
top:-10%;
padding: 5px;
`
export const PrecoAvista = styled.div`
  height: 100%;
  width: 20%;
  background-color: blue;
`
export const Remove = styled.button`
  font-size: 0.6em!important;
  color: rgb(231, 38, 38)!important;
  font-weight: bold;
`