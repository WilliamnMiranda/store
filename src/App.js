import React from "react";
import Header from "./components/header";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Access from "./pages/Acess";
import { UserStore } from "./contexts/user";
function App() {
  return (
    <BrowserRouter>
      <UserStore>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/store/login" element={<Access />} />
        </Routes>
      </UserStore>
    </BrowserRouter>
  );
}

export default App;
