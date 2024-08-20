import React from "react";
import ItemCard from "./ItemCard";

const items = [
  {
    title: "Summer Dress",
    imageSrc: "/images/The_girl.jpg",
    price: "$49.99",
    description: "A lightweight summer dress perfect for sunny days.",
  },
  {
    title: "Stylish Top",
    imageSrc: "/images/The_girl.jpg",
    price: "$29.99",
    description: "A trendy top that pairs well with jeans and skirts.",
  },
  {
    title: "Running Shoes",
    imageSrc: "/images/The_girl.jpg",
    price: "$89.99",
    description: "Comfortable and durable running shoes for everyday wear.",
  },
  {
    title: "Casual Jacket",
    imageSrc: "/images/The_girl.jpg",
    price: "$79.99",
    description: "A stylish jacket for casual outings.",
  },
];

interface CategoryProps {
  category: string;
}
const Items: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div className="container mx-auto py-4">
      <div className="py-2 px-3">
        <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 ml-4 mb-6">
          {category}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <ItemCard
              key={item.title}
              title={item.title}
              imageSrc={item.imageSrc}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
