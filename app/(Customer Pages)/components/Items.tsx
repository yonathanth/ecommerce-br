import React from "react";
import ItemCard from "./ItemCard";
import Link from "next/link";

const items = [
  {
    title: "Summer Dress",
    imageSrc: "/woman-3040029_1920.jpg",
    price: 49.99,
    description: "A lightweight summer dress perfect for sunny days.",
    availableSizes: "S, M, L XL",
    availableColors: "Red, Blue, Yellow",
  },
  {
    title: "Stylish Top",
    imageSrc: "/woman-3040029_1920.jpg",
    price: 29.99,
    description: "A trendy top that pairs well with jeans and skirts.",
    availableSizes: "XL, S, M, L",
    availableColors: "Black, White, Pink",
  },
  {
    title: "Running Shoes",
    imageSrc: "/woman-3040029_1920.jpg",
    price: 89.99,
    description: "Comfortable and durable running shoes for everyday wear.",
    availableSizes: "7, 8, 9, 10, 11",
    availableColors: "Gray, Black, White",
  },
  {
    title: "Casual Jacket",
    imageSrc: "/woman-3040029_1920.jpg",
    price: 79.99,
    description: "A stylish jacket for casual outings.",
    availableSizes: "M, L, XL, XXL",
    availableColors: "Navy, Olive, Black",
  },
];

interface CategoryProps {
  category: string;
}

const Items: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div className="pt-12 px-8" id={category}>
      <div className="px-4">
        <div className="flex justify-between px-3">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            {category}
          </h3>
          <Link href={`/shop#${category}`}>
            <button className="text-2xl font-semibold text-gray-800 mb-8">
              See all
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <ItemCard
              id={item.price}
              key={item.title}
              title={item.title}
              imageSrc={item.imageSrc}
              price={item.price}
              description={item.description}
              availableColors={item.availableColors}
              availableSizes={item.availableSizes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
