import styled from "styled-components";
export const Container = styled.main`
  margin-top: 60px;
  width: 100%;
  @media(max-width: 800px) {
    margin-top: 20px;
  }
`;
export const ContainerProdutoAdicionado = styled.div`
  width: 80%;
  height: 200px;
  background-color: white;
  margin: 0 auto;
  padding: 20px;
  @media(max-width: 800px) {
    width: 100%;
    height: 450px;
  }
`;
export const ContainerInfosProdutoAdicionado = styled.section`
  display: flex;
  width: 100%;
  height: 90%;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`;

export const ContainerFotoProduto = styled.img`
  height: 100%;
  width: 14%;
  margin-right: 10px;
  background-color: red;
  @media(max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin: 0 auto;
    height: 150px;
  }
`;
export const ContainerNomeProduto = styled.div`
  height: 100%;
  width: 50%;
  padding: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  span {
    color: grey;
  }
  @media(max-width: 800px){
    width: 100%;
    align-items: center;
  }
`;
export const ContainerValorProduto = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  @media(max-width: 800px){
    width: 100%;
    justify-content: center;
  }
`;

export const NameProduct = styled.p`
  margin-top: 10px;
  font-size: 1.3em;
  font-weight: bold;
  color: rgb(66, 70, 77);
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
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid #FC6B0F;
  color: rgb(86, 92, 105);
  p{
    font-size: 0.9em;
    width: 100%;
  }
`

export const Avista = styled.div`
  color: #FC6B0F;
  padding: 20px;
  div{
    font-size: 1.5em;
  }
`
export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding:40px;
  width: 100%;
`
export const TextInfo = styled.span`
  color:#42464D;
  font-size: 1.4em;
  span {
    color: #FC6B0F;;
  }
`

export const ContainerServicos = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  height: 450px;
  background-color: transparent;
  @media(max-width: 800px){
    width: 100%;
    flex-direction: column;
    height: auto;
  }
`
export const ContainerAdicionarServico = styled.div`
  background-color: white;
  height: 100%;
  width: 72%;
  padding:15px;
  @media(max-width: 800px){
    width: 100%;
    margin-bottom: 10px;
  }
`
export const ContainerValoresServico = styled.div`
  background-color: white;
  height: 100%;
  padding: 20px;
  width: 25%;
  @media(max-width: 800px){
    width: 100%;
  }
`
export const ContainerTittle = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  h2{
    color: rgb(66, 70, 77);
  }
  div{
    display: flex;
    align-items: center;
  }
  span{
      margin-right: 10px;
      color: #FC6B0F;
      font-size:1.5em;
    }
`
export const ContainerInfoGarantia = styled.div`
  width: 100%;
  color: #565C69;
  margin-top: 10px;
  font-weight: 400;
`
export const ContainerGarantias = styled.section`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  @media(max-width: 800px){
    flex-wrap: wrap;
    gap:15px;
  }
`

export const ContainerTittleValoresServico = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  span{
      margin-right: 10px;
      color: #FC6B0F;
      font-size:1.5em;
      margin-top: 2%;
    }
  h2{
    padding:0px;
    margin: 0px;
    color: rgb(66, 70, 77);
  }
`

export const ContainerValorGarantia = styled.div`
margin-bottom: 25px;
  p{
    font-size: 0.8em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    border-bottom: 1px solid #DEE0E4;
  }
`
export const ValorGarantia = styled.span`
  font-size: 1.5em;
`
export const ContainerValorTotalServicos = styled.div`
  padding: 15px;
  width: 100%;
  background-color: rgb(229, 255, 241);
  span{
    color: #1F9050;
    font-size: 0.8em;
  }
`
export const ValorTotal = styled.p`
width: 100%;
display: flex;
justify-content: flex-end;
color:#1F9050;
font-size: 1.7em;
`
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  button{
    width: 100%;
    padding:10px;
    height: 45px;
    cursor: pointer;
  }
  a{
  color:white;
  }
`
export const ButtonComprar = styled.button`
  border: none;
  outline: none;
  color: white;
  font-weight: bold;
  background-color: #FF6500;
  margin-bottom: 20px;
`
export const ButtonContinuar = styled.button`
border: 1px solid #FF6500;
color:#FF6500;
background-color: white;
a{
  color:#FF6500;
  }
`
