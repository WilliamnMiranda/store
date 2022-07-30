import styled from 'styled-components'

export const ContainerCart = styled.main`
    margin-top: 35px;
    width: 100%;
    font-family: Poppins, sans-serif !important;
    position: relative;
`

export const ContainerLocationSearch = styled.div`
  background-color: white;
  padding: 30px;
  h2 {
    span {
      margin-right: 5px;
      color: rgb(255, 101, 0);
      font-size: 0.9em;
    }
    font-weight: bold;
    padding:  10px 0px;
    display: flex;
    align-items: center;
  }
`

export const ContainerSearch = styled.div`
    input{
    height: 48px;
    width: 300px;
    background-color: transparent;
    border: 1px solid rgb(222, 224, 228);
    margin: 20px 10px 0px 0px;
    padding: 10px;
    font-size: 1.2em;
    margin-bottom: 10px;
    }
    button{
    height: 48px;
    width: 48px;
    color:white;
    font-weight: bold;
    border-radius: 10px;
    border: 1px solid rgb(255, 101, 0);
    background-color: rgb(255, 101, 0);
    margin-right: 10px;
    }
    a{
        text-decoration: underline;
        color: rgb(255, 101, 0);
        :hover{
            text-decoration: none;
        }
    }
`
export const ContainerMain = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media(max-width: 800px) {
    flex-direction: column;
  }
`

export const SectionMain = styled.div`
  width: 75%;
  @media(max-width: 800px) {
    width: 100%;
  }
`
export const Aside = styled.aside`
  padding: 20px;
  width: 20%;
  background-color: white;
  @media(max-width: 800px) {
    width: 100%;
  }
`

export const Endereco= styled.p`
  margin-top: 20px;
`

export const ContainerProducts = styled.section`
  padding:25px;
  margin-top: 30px;
  width: 100%;
  background-color: white;
  @media (max-width: 800px){
    padding:10px;
  }
`
export const TittleProducts = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  @media(max-width: 800px) {
    align-items: center;
  }
  button{
    color: rgb(231, 38, 38);
    background: transparent;
    border: 1px solid rgb(231, 38, 38);
    padding: 5px;
    font-size: 0.9em;
    font-weight: bold;
    cursor: pointer;
    @media(max-width: 800px) {
      padding: 0px;
      font-size: 0.5em;
      padding: 5px;
    }
  }
  h2{
    font-size: 1.3em;
    @media(max-width: 800px) {
      font-size: 0.9em;
    }
  }
  span{
    color: rgb(255, 101, 0);
    font-weight: bold;
    font-size: 0.9em;
    margin-right: 10px;
    @media(max-width: 800px) {
      margin-right: 0px;
    }
  }
`
export const Summary = styled.div``
export const ValueInPix = styled.div`
  width: 100%;
  padding:20px;
  background-color: red;
  background: rgb(229, 255, 241);
  color: rgb(31, 144, 80);
  p{
    font-size: 1.1em;
  }
  div{
    font-size: 1.8em;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    font-weight: bold;
  }
  span{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 0.9em;
  }
`

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  text-transform: uppercase;
  font-weight: bold;
  button{
    width: 100%;
    padding:10px;
    height: 45px;
    cursor: pointer;
  }
`
export const ButtonBuy = styled.button`
  border: none;
  outline: none;
  color: white;
  font-weight: bold;
  background-color: #FF6500;
  margin-bottom: 20px;
`
export const ButtonContinue = styled.button`
border: 1px solid #FF6500;
color:#FF6500;
background-color: white;
`
export const Values= styled.div`
div{
  margin-bottom: 10px;
  padding:10px;
  color: rgb(127, 133, 141);
  font-size: 0.8em;
  font-family: Poppins, sans-serif !important;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  span{
    font-size: 1.5em;
    color:rgb(66, 70, 77);
  }
  :first-child{
    border-bottom: 1px solid rgb(222, 224, 228);
  }
}
`
export const ContainerEmpty = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    width: 200px;
    height: 200px;
    img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  }
`