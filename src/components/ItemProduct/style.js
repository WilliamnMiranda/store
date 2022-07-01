import styled from "styled-components";

export const ContainerProduct = styled.article`
  padding: 5px;
  width: 218px;
  height: 400px;
  background-color: white;
  margin-bottom: 10px;
  margin-left: 5px;
  & .MuiSvgIcon-root {
    font-size: 1.1em;
  }
`;
export const HeaderProduct = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
`;
export const ContainerPromo = styled.div`
  display: flex;
`;

export const Promo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: #ff6500;
  color: white;
  font-weight: bold;
  margin-right: 10px;
`;

export const Unidades = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: transparent;
  color: #ff6500;
  border: 1px solid #ff6500;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  p {
    text-transform: uppercase;
    font-size: 0.5em;
  }
  div {
    font-size: 0.8em;
    font-weight: bold;
  }
`;

export const PhotoProduct = styled.div`
  width: 100%;
  height: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 80%;
    width: 80%;
  }
`;
export const NameProduct = styled.p`
  font-weight: bold;
  color: grey;
`;

export const Values = styled.p`
  margin: 3% 0%;
`;

export const LastValue = styled.p`
  font-size: 0.8em;
  text-decoration: line-through;
  font-weight: 400;
  color: rgb(127, 133, 141);
`;

export const NewValue = styled.p`
  font-size: 1.5em;
  font-weight: 700;
  color: rgb(255, 101, 0);
`;
export const InfoPix = styled.p`
  font-size: 0.9em;
  font-weight: 400;
  color: rgb(127, 133, 141);
`;
export const ButtonCart = styled.button`
  background-color: rgb(255, 101, 0);
  border: none;
  outline: none;
  width: 100%;
  height:8%;
`;
