import React from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";

import MainPage from "./pages/MainPage";
import Cart from "./components/Cart";
import PageNotFound from "./pages/PageNotFound";

import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
