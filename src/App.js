import React from "react";
import Header from "./components/header";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Access from "./pages/Acess";
import { UserStore } from "./contexts/user";
import { DrawerStore } from "./contexts/drawer";
import Layout from "./components/Layout";
import HomePage from "./pages/home";
import PrevCart from "./pages/prevCart";
function App() {
  return (
    <BrowserRouter>
      <DrawerStore>
        <UserStore>
          <Header />
          <Layout>
            <GlobalStyle />
            <Routes>
              <Route path="/store" element={<HomePage />} />
              <Route path="/store/login" element={<Access />} />
              <Route path="/store/product/:id" element={<PrevCart />} />
            </Routes>
          </Layout>
        </UserStore>
      </DrawerStore>
    </BrowserRouter>
  );
}

export default App;
