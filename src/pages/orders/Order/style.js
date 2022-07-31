import styled from 'styled-components'

export const ContainerOrder = styled.article`
    display: flex;
    margin-top:20px;
    width: 100%;
    background-color: white;
    height: 100px;
    padding: 20px;
    font-family: Poppins, sans-serif !important;
`
export const NumOrder = styled.div`
    width: 25%;
`

export const StatusOrder = styled.div`
    width: 15%;
`

export const ValueOrder = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
`

export const TittleOrder = styled.div`
    font-size: 0.9em;
    font-weight: bold;
    margin-bottom: 20px;
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