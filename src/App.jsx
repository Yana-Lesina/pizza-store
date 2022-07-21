import React from "react";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";

import MainPage from "./pages/MainPage";
import Cart from "./components/Cart";
import PageNotFound from "./pages/PageNotFound";
import { Header } from "./components/Header";

export const SearchedContext = React.createContext("");

const App = () => {
  const [searchedWord, setSearchedWord] = React.useState("");

  return (
    <SearchedContext.Provider value={{ searchedWord, setSearchedWord }}>
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
    </SearchedContext.Provider>
  );
};

export default App;
