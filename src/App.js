import React, { useState } from "react";
import { Router, Route, Routes, Link, Outlet } from "react-router-dom";
import "./App.sass";
import Header from "./components/Header";
import Slider from "react-slick";
import Footer from "./components/Footer";
import SliderComponent from "./components/Slider.js";
import DataComponent from "./DataComponent";
import Sale from "./components/Sale";
import About from "./components/About";
import HomePage from "./components/HomePage.js";
import Layout from "./components/Layout";
import GoodsPage from "./components/GoodsPages";
import Catalog from "./components/Catalog";
import CategoryPage from "./components/CategoryPage";
import { SearchResult } from "./components/SearchResult";
import Privacy from "./components/Privacy";
import Contacts from "./components/Contacts";

import "../src/components/Layout.sass";
import Cart from "./components/Cart";

const App = () => {
  const [data, setData] = useState([]);
  const [privacyData, setPrivacyData] = useState([]);
  const [purchases, setPurchases] = useState([]);

  const handleData = (goodsData, privacyData) => {
    setData(goodsData);
    setPrivacyData(privacyData);
  };

  const handlePurchasesChange = (newPurchases) => {
    setPurchases(newPurchases);
  };



  return (
    <div className="wrapper">
      <DataComponent onData={handleData} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <HomePage
                data={data}
                purchases={purchases}
                onPurchasesChange={handlePurchasesChange}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route
            path="privacy"
            element={<Privacy privacyData={privacyData} />}
          />
          <Route path="contacts" element={<Contacts />} />
          <Route
            path=":goods/:id"
            element={
              <GoodsPage
                data={data}
                purchases={purchases}
                onPurchasesChange={handlePurchasesChange}
              />
            }
          />
          <Route
            path="catalog"
            element={
              <Catalog
                data={data}
                purchases={purchases}
                onPurchasesChange={handlePurchasesChange}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                data={data}
                purchases={purchases}
                onPurchasesChange={handlePurchasesChange}
              />
            }
          />
          <Route
            path=":category"
            element={
              <CategoryPage
                data={data}
                purchases={purchases}
                onPurchasesChange={handlePurchasesChange}
              />
            }
          />
          <Route
            path="search/:searchValue"
            element={
              <SearchResult
                data={data}
                purchases={purchases}
                onPurchasesChange={handlePurchasesChange}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
