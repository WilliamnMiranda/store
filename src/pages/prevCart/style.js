import styled from "styled-components";

export const Container = styled.main`
  margin-top: 60px;
  width: 100%;
`;
export const ContainerProdutoAdicionado = styled.div`
  width: 80%;
  height: 200px;
  background-color: white;
  margin: 0 auto;
  padding: 20px;
`;
export const ContainerInfosProdutoAdicionado = styled.section`
  display: flex;
  width: 100%;
  height: 90%;
`;

export const ContainerFotoProduto = styled.div`
  height: 100%;
  width: 20%;
  background-color: red;
  margin-right: 10px;
`;
export const ContainerNomeProduto = styled.div`
  height: 100%;
  width: 50%;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const ContainerValorProduto = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
`;

export const NameProduct = styled.p`
  margin-top: 20px;
  font-size: 1.3em;
  font-weight: bold;
`;

export const MessageProduct = styled.p`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: green;
  div{
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:5px;
  }
  span{
    font-size: 0.7em;
    color:white;
    position: relative;
    top:2px;
  }
`;

export const Parcelas = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid red;
  color: rgb(86, 92, 105);
`

export const Avista= styled.div`
  color: #FC6B0F;
  padding: 20px;
  div{
    font-size: 1.5em;
  }
`
