import styled from 'styled-components'

export const ContainerMessage = styled.div`
    top:-70px;
    left: 25%;
    position: absolute;
    display: flex;
    align-items: center;
    padding: 30px;
    justify-content: center;
    width: 500px;
    height: 50px;
    background-color:${props => (props.background)};
    color:${props => (props.color)};
`