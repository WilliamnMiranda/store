import styled from "styled-components";

export const ContainerCard = styled.div`
    position: relative;
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
    .MuiTextField-root{
        
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

export const Error = styled.div``
export const Success = styled.div``
export const NameAndNumber = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    .MuiTextField-root{
        width: 49%;
    }
    @media(max-width:800px){
        flex-direction: column;
        .MuiTextField-root{
            width: 100%;
            margin-bottom: 10px;
        }
    }
`

export const ValidateAndCvv = styled.div`
    width: 49%;
    display: flex;
    justify-content: space-between;
    .MuiTextField-root{
            width: 49%;
            margin-bottom: 10px;
    }
    @media(max-width:800px){
        flex-direction: column;
        .MuiTextField-root{
            width: 100%;
            margin-bottom: 10px;
        }
    }
`
export const CpfAndDate = styled.div`
    width: 49%;
    display: flex;
    justify-content: space-between;
    .MuiTextField-root{
            width: 49%;
            margin-bottom: 10px;
    }
    @media(max-width:800px){
        flex-direction: column;
        .MuiTextField-root{
            width: 100%;
            margin-bottom: 10px;
        }
    }
`