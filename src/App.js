import React from "react";
import Header from "./components/header";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Access from "./pages/Acess";
import { UserStore } from "./contexts/user";
import { CartStore } from "./contexts/cart";
import { DrawerStore } from "./contexts/drawer";
import Layout from "./components/Layout";
import HomePage from "./pages/home";
import PrevCart from "./pages/prevCart";
import Cart from "./pages/cart";
function App() {
  return (
    <BrowserRouter>
      <DrawerStore>
        <UserStore>
          <CartStore>
          <Layout>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Access />} />
                <Route path="/product/:id" element={<PrevCart />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
          </Layout>
          </CartStore>
        </UserStore>
      </DrawerStore>
    </BrowserRouter>
  );
}

export default App;
