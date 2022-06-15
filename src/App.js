import React from "react";
import Header from "./components/header";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Access from "./pages/Acess";
import { UserStore } from "./contexts/user";
import { DrawerStore } from "./contexts/drawer";
import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
      <DrawerStore>
        <UserStore>
          <Layout>
            <GlobalStyle />
            <Header />
            <Routes>
              <Route path="/store/login" element={<Access />} />
            </Routes>
          </Layout>
        </UserStore>
      </DrawerStore>
    </BrowserRouter>
  );
}

export default App;
