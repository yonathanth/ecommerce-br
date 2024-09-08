import React from "react";
import Shein from "../_components/Shein";
import Items from "../_components/Items";
import Footer from "../_components/Footer";
import Nav from "../_components/Nav";

const shop = () => {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-purple-200 min-h-screen">
      <Nav />
      <div>
        <Shein />

        <Items home={false} category="Top Picks" />
        <Items home={false} category="Tops" />
        <Items home={false} category="Bottoms" />
        <Items home={false} category="Shoes" />
      </div>
      <Footer />
    </div>
  );
};

export default shop;
