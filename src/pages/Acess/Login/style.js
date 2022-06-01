import styled from 'styled-components'

export const Container = styled.section`
  width: 50%;
  padding:10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Tittle =  styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(255, 101, 0);
  margin-bottom: 30px;
`
export const ContainerFormulario = styled.form`
  width: 100%;
`

export const ContainerInput = styled.div`
  margin-bottom: 20px;
`

export const ButtonSubmit = styled.button`
    width: 100%;
    height: 48px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    border: 1px solid rgb(255, 101, 0);
    background-color: rgb(255, 101, 0);
    user-select: none;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color 0.3s ease 0s;
    border-radius: 0.25rem;
`
export const Recuperation = styled.section`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const RecuperationText = styled.span`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: underline;
    color: rgb(127, 133, 141);
    margin: 0px 10px;
    cursor: pointer;
`

export const SocialsLogins = styled.section`
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 2px solid rgb(242, 243, 244);
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    width: 100%;
`
export const SubTittle= styled.h4`
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 1.375rem;
    font-weight: 700;
    color: rgb(127, 133, 141);
    margin: 1rem 0px;
    text-align: center;
`
export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
`

export const ButtonSocial = styled.button`
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0.65rem;
    margin-right: 1rem;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(0, 96, 177);
    border-radius: 0.25rem;
    display: flex;
    width: 50%;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    margin-right: 10px;
`

export const ButtonFacebook = styled(ButtonSocial)`
  border: 1px solid rgb(0, 96, 177);
  color: rgb(0, 96, 177);
`

export const ButtonGoogle = styled(ButtonSocial)`
  color: rgb(231, 38, 38);
  border: 1px solid rgb(231, 38, 38);
  margin-right: 0px;
`

