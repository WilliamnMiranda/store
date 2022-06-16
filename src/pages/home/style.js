import styled from 'styled-components'

export const ContainerHome = styled.main`
    width: 100%;
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
    height: 330px;
    width: 100%;
    img {
        object-fit: contain;
        object-position: center top;
        width: 100%;
    }
`