import React from "react";
import Shein from "../components/Shein";
import Items from "../components/Items";

const shop = () => {
  return (
    <div className="py-32">
      <Shein />

      <Items category="Tops" />
      <Items category="Dresses" />
      <Items category="Shoes" />
      <Items category="Accessories" />
    </div>
  );
};

export default shop;
