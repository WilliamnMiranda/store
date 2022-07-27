import styled from "styled-components";

export const ContainerProduct = styled.article`
  padding: 10px;
  width: 210px;
  height: 430px;
  max-height: 430px;
  margin-bottom: 10px;
  background: rgb(255, 255, 255);
  margin-left: 5px;
  border-radius: 0.25rem;
  box-shadow: rgb(40 41 61 / 8%) 0px 0px 1px, rgb(96 97 112 / 16%) 0px 0.5px 2px;
  & .MuiSvgIcon-root {
    font-size: 1.1em;
  }
`;
export const HeaderProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 12%;
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
  background-color: white;
  display: flex;
  align-items: center;
  height: 47%;
  justify-content: center;
  img {
    height: 80%;
    width: 80%;
  }
`;
export const NameProduct = styled.div`
  font-weight: bold;
  height: 13%;
  background-color: white;
  color: rgb(66, 70, 77);
  font-size: 0.9em;
  max-width: calc(200px);
  p{
    overflow: hidden;
    text-overflow:ellipsis;
    max-height: 51px;
    white-space:wrap;
    display: -webkit-box;
  -webkit-line-clamp: 3; /** número de linhas que você quer exibir */
  -webkit-box-orient: vertical;
  }
`;

export const Values = styled.p`
  height: 20%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
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
  height: 8%;
  cursor: pointer;
`;
