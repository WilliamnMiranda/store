import styled from 'styled-components'

export const ContainerPix = styled.section`
    font-family: Poppins, sans-serif !important;
    color: rgb(86, 92, 105);
    p{
        margin-bottom: 10px;
    }
    li{
        list-style: circle;
        margin-bottom: 10px;
    }
`
export const FirstTitulo = styled.div`
    font-size: 1.4em;
`
export const SecondTittle = styled.div`
    font-size: 1.0em;
    color:rgb(86, 92, 105);
`
export const ContainerInfos = styled.section`
    display: flex;
    gap:30px;
`
export const Info = styled.article`
    background-color:${props => (props.background)};
    color:${props => (props.color)};
    width: 50%;
    padding: 10px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        font-size: 1.3em;
    }
    span{
        font-size: 1.5em;
    }
`