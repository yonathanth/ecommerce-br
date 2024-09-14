import React from "react";
import Card from "./Card";

const categories = [
  { title: "Top Picks", imageSrc: "/1.png" },
  { title: "Dresses and Trousers", imageSrc: "/1.png" },
  { title: "Jackets", imageSrc: "/1.png" },
  { title: "Tops", imageSrc: "/1.png" },
  { title: "Shoes", imageSrc: "/1.png" },
  { title: "Comsmos", imageSrc: "/1.png" },
  { title: "Accessories", imageSrc: "/1.png" },

  { title: "Others", imageSrc: "/1.png" },
];

const Cards: React.FC = () => {
  return (
    <div className="py-20 px-4 sm:px-8" id="products-section">
      <h3 className="text-2xl sm:text-4xl font-bold text-accentthirty mb-8 ml-4 text-center sm:text-left">
        Explore Our Categories
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {categories.map((category) => (
          <Card
            key={category.title}
            title={category.title}
            imageSrc={category.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
