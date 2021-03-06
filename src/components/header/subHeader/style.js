import styled from 'styled-components'

  export const ContainerSubMenu = styled.aside`
    width: 100%;
    background-color: rgb(255, 101, 0);
    @media(max-width: 800px) {
      display: none;
  }
`

  export const ContainerMenu = styled.nav`
    width: 80%;
    margin: 0 auto;
    @media(max-width: 1500px) {
      width: 100%;
  }
`

  export const ContainerLista = styled.ul`
    color:white;
    display: flex;
    justify-content: center;
`
export const ItemLista = styled.li`
    font-weight: bold;
    font-size: 14px;
    padding:10px 5px;
    margin-right: 25px;
    @media(max-width: 1500px) {
      font-size: 0.7em;
  }
    & a {
      color:white;
    }
    & a:visited{
      color:white;
    }
`