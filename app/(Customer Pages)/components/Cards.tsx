import React from "react";
import Card from "./Card";

const categories = [
  { title: "Dresses", imageSrc: "/woman-3040029_1920.jpg" },
  { title: "Tops", imageSrc: "/woman-3040029_1920.jpg" },
  { title: "Shoes", imageSrc: "/woman-3040029_1920.jpg" },
  { title: "Accessories", imageSrc: "/woman-3040029_1920.jpg" },
];

const Cards: React.FC = () => {
  return (
    <div className="pt-12 px-8" id="products-section">
      <h3 className="text-xl sm:text-3xl font-semibold text-gray-800 mb-6 ml-4">
        Categories
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 px-3 md:px-5  gap-6 sm:gap-8">
        {categories.map((category) => (
          <Card
            key={category.title}
            title={category.title}
            imageSrc={category.imageSrc}
          />
        ))}
      </div>

      <hr className="mt-12 mb-6 border-gray-300" />
    </div>
  );
};

export default Cards;
