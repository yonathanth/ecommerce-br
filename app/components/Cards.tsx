import React from "react";
import Card from "./Card";

const categories = [
  { title: "Dresses", imageSrc: "/images/The_girl.jpg" },
  { title: "Tops", imageSrc: "/images/The_girl.jpg" },
  { title: "Shoes", imageSrc: "/images/The_girl.jpg" },
  { title: "Accessories", imageSrc: "/images/The_girl.jpg" },
];

const Cards: React.FC = () => {
  return (
    <div className="pt-12 px-8">
      <h3 className="text-xl sm:text-3xl font-semibold text-gray-800 mb-6 ml-4">
        Categories
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
