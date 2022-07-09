import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   body{
    background-color: #F2F3F4;
   }
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: Poppins, sans-serif !important;
    outline: none;
  }
`;
 
export default GlobalStyle;