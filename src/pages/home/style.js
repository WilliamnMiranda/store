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
`
export const BannerHome = styled.section`
    height: 370px;
    width: 100%;
    img {
        object-fit: contain;
        object-position: center top;
        width: 100%;
    }
`

export const ContainerMain = styled.section`
    margin: 0 auto;
    width: 94%;
    position: relative;
    top: -60px;
    height: 500px;
    background-color: white;
`