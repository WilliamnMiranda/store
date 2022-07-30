import styled from "styled-components";

export const ContainerCard = styled.div`
    h1,h2{
        margin-bottom: 10px;
    }
    h2{
        font-size: 1.2em;
    }
    p{
        margin-bottom: 10px;
        font-family: Poppins, sans-serif !important;
    color: rgb(86, 92, 105);
    }
    button{
        width: 100%;
        height: 50px;
        border:none;
        background-color: #FF6500;
        color:white;
        font-weight: bold;
        font-size: 1.2em;
    }
`
export const CardData = styled.div`
    border: 1px solid rgb(222, 224, 228);
    padding: 20px;
    input{
        border-color: pink;
    }
`
export const ContainerCardData = styled.div`
    display: flex;
    align-items: center;
    gap:20px;
    margin-bottom: 20px;
`