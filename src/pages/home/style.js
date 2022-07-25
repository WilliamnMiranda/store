import styled from 'styled-components'

export const ContainerHome = styled.main`
    margin:0 auto;
    width: 95%;
    background-color: #002156;
    height: 400px;
    ::after{
        content: "";
        background-color: #002156;
        position: absolute;
        left:0px;
        top:0px;
        z-index: -20000;
        width: 100%;
        height: 100%;
    }
    @media(max-width: 800px) {
    left: 100%;
    width: 100%
  }
`
export const BannerHome = styled.section`
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center top;
    }
`

export const ContainerMain = styled.section`
    margin: 0 auto;
    width: 94%;
    position: relative;
    top: -50px;
     background: rgb(250, 250, 251);

    ::after{
        content: '';
        width: 100%;
        height: 100%;
        top:0px;
        left:0px;
        z-index: -1000;
        position: fixed;
        background-color: #002156;
    }
    @media(max-width: 800px) {
     top: -10px;
  }
    
`

export const ContainerProdutos = styled.section`
    width: 100%;
    padding:30px;
    display: flex;
    align-items:center;
    justify-content: flex-start;
    flex-wrap: wrap;
    background: rgb(250, 250, 251);
    @media(max-width: 800px) {
    align-items: center;
    justify-content: center;
  }
`