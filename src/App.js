import React from "react";
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
import Orders from "./pages/orders";
import Payment from "./pages/payment";
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
                <Route path="/login" element={ <Access />} />
                <Route path="/product/:id" element={<PrevCart />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/orders" element={<Orders />} />
            </Routes>
          </Layout>
          </CartStore>
        </UserStore>
      </DrawerStore>
    </BrowserRouter>
  );
}

export default App;
