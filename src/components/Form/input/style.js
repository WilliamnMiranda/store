import styled from 'styled-components'

const Input = styled.input` 
    width: 100%;
    background: none;
    padding: 0.6875rem 1rem;
    color: rgb(86, 92, 105);
    font-size: 0.875rem;
    line-height: 1.3rem;
    position: relative;
    border: 1px solid rgb(127, 133, 141);
    outline: none;
    &:focus{
        border: 1px solid rgb(255, 101, 0);
    }
`


export default Input