import styled from "styled-components";

export const ContainerProduct = styled.article`
  padding: 5px;
  width: 214px;
  height: 400px;
  background-color: pink;
  margin-bottom: 10px;
  margin-left: 11px;
  :first-child {
    margin-left: 0px;
  }
  :nth-child(7n) {
    margin-left: 0px;
  }
`;
export const HeaderProduct = styled.div`
  width: 100%;
  height: 50px;
  background-color: grey;
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
  width:  45px;
  height: 45px;
  background-color: red;
  margin-right: 10px;
`;

export const Unidades = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width:  45px;
  height: 45px;
  background-color: pink;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  p {
    font-size: 0.6em;
  }
  div {
    font-size: 0.7em;
  }
`;
