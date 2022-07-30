import styled from 'styled-components'

export const ContainerPayment = styled.main`
    width: 100%;
    height: 50px;
    margin-top: 35px;
h1{
    margin: 20px 0px;
    text-transform: uppercase;
    font-size: 1.5em;
    span{
        color: #FF6500;
        margin-right: 10px;
    }
}
`
export const ContainerOptions = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: white;
`
export const Aside = styled.aside`
    width: 25%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding:15px
`
export const ContainerOptionsPayment = styled.article`
    width: 73%;
    background-color: white;
    padding:15px;
`
export const ButtonTypePayment = styled.button`
    margin-top: 20px;
    background-color: transparent;
    height: 50px;
    width: 100%;
    border: 1px solid #FF6500;
    font-weight: bold;
    font-size: 1.2em;
    color: #FF6500;
    :first-child{
        margin-top: 0px;
    }
`