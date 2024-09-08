import React from "react";
import Shein from "../_components/Shein";
import Items from "../_components/Items";
import Footer from "../_components/Footer";
import Nav from "../_components/Nav";
import Cards from "../_components/Cards";

const shop = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-200 min-h-screen">
      <Nav />
      <div>
        <Shein />
        <Cards />
        <Items home={true} category="Top Picks" />
        <Items home={true} category="Accessories" />
        <Items home={true} category="Clothes" />
        <Items home={true} category="Shoes" />
      </div>
      <Footer />
    </div>
  );
};

export default shop;
