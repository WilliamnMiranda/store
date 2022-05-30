import React from "react";
import Header from './components/header'
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Access from "./pages/Acess";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/login' element={<Access />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
