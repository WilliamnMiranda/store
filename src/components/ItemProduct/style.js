import styled from 'styled-components'

export const ContainerProduct = styled.article`
    width: 214px;
    height: 400px;
    background-color: pink;
    margin-bottom: 10px;
    margin-left: 11px;
    :first-child{
        margin-left: 0px;
    }
    :nth-child(7n){
        margin-left: 0px;
    }
`