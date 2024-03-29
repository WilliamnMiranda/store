import styled from 'styled-components'

export const ContainerMessage = styled.div`
    top:${props => (props.top)+'px'};
    left: 25%;
    position: absolute;
    display: flex;
    align-items: center;
    padding: 30px;
    justify-content: center;
    width: 500px;
    height: 50px;
    font-weight: bold;
    background-color:${props => (props.background)};
    color:${props => (props.color ? props.color : 'black')};
    @media(max-width: 800px) {
    width: 100%;
}
@media(max-width: 800px) {
    left: 0px;
    top:45%;
    z-index: 10000;
}
`