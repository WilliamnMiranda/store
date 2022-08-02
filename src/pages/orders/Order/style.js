import styled from 'styled-components'

export const ContainerOrder = styled.article`
    display: flex;
    margin-top:20px;
    width: 100%;
    background-color: white;
    height: 100px;
    padding: 20px;
    font-family: Poppins, sans-serif !important;
    @media(max-width: 1400px){
        flex-direction: column;
        height: auto;
        padding: 10px;
    }
    > div {
        margin-bottom: 10px;
    }
`
export const NumOrder = styled.div`
    width: 25%;
    @media(max-width: 1400px){
        width: 100%;
    }
`

export const StatusOrder = styled.div`
    width: 15%;
    @media(max-width: 1400px){
        display: flex;
        width: 100%;
    }
`

export const ValueOrder = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    @media(max-width: 1400px){
        display: flex;
        flex-direction: row;
        width: 100%;
    }
`

export const TittleOrder = styled.div`
    font-size: 0.9em;
    font-weight: bold;
    margin-bottom: 20px;
    @media(max-width:1400px){
      margin-bottom: 0px;
      margin-right: 10px;
    }
`
export const InfoOrder = styled.div`
    color:${props => (props.color ? props.color : 'rgb(66, 70, 77)')};
    font-size: 1.0em;
`

export const OrderDetail = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8em;
`