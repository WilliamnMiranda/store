import styled from 'styled-components'

export const Container = styled.section`
  width: 50%;
  padding:10px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media(max-width: 800px) {
      width: 100%;
  }
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
  margin-bottom: 17px;
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
    background-color: rgb(255, 255, 255);
    user-select: none;
    color: rgb(255, 101, 0);
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color 0.3s ease 0s;
    border-radius: 0.25rem;
  `
