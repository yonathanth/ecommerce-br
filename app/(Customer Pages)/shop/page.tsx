import React from "react";
import Shein from "../_components/Shein";
import Items from "../_components/Items";
import NavBar from "../NavBar";
import Footer from "../Footer";

const shop = () => {
  return (
    <>
      <NavBar />
      <div className="py-32">
        <Shein />

        <Items category="Tops" />
        <Items category="Dresses" />
        <Items category="Shoes" />
        <Items category="Accessories" />
      </div>
      <Footer />
    </>
  );
};

export default shop;
