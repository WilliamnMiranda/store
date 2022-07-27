import styled from 'styled-components'
export const ContainerProdutoMobile = styled.article`
font-family: Poppins, sans-serif !important;
border-top: 1px solid rgb(222, 224, 228);
height: 120px;
width: 100%;
margin-bottom: 10px;
display: flex;
align-items: center;
justify-content: center;
@media(min-width: 800px) {
    display: none;
  }
  section{
    width: 70%;
  }
`
export const Imagem = styled.img`
display: flex;
height: 70%;
width: 26%;
margin-right: 10px;
`
export const Name = styled.p`
  color: rgb(66, 70, 77);
  font-weight: 700;
  font-size: 0.8em;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 5px 0px;
`
export const Rating = styled.div``
export const PrecoAVista = styled.div`
  font-size: 1.2em;
  color:rgb(31, 144, 80);
  span{
    font-size:0.8em;
  }
`
export const PrecoParcelado = styled.div`
font-size: 0.8em;
font-family: Poppins, sans-serif !important;
color: rgb(127, 133, 141);
margin-bottom: 5px;
`
export const AlterarItems = styled.div`

`