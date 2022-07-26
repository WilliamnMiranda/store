import styled from 'styled-components'
export const ContainerProdutoMobile = styled.article`
height: 100px;
width: 100%;
margin-bottom: 10px;
border: 1px solid rgba(1,1,1,0.2);
@media(min-width: 800px) {
    display: none;
  }
`
export const Imagem = styled.img`
height: 100%;
width: 30%;
`