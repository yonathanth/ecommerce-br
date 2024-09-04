import React from "react";
import ItemCard from "./ItemCard";
import Link from "next/link";
import prisma from "@/prisma/client";

const fetchItems = async function (category: string) {
  return prisma.product.findMany({
    where: { isAvailableForPurchase: true, category: category },
    orderBy: { orders: { _count: "desc" } },
    take: 4,
    select: {
      id: true,
      name: true,
      priceInCents: true,
      imagePath: true,
      size: true,
      description: true,
      color: true,
    },
  });
};

interface CategoryProps {
  category: string;
}

const Items: React.FC<CategoryProps> = async ({ category }) => {
  const items = await fetchItems(category);
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
              id={item.id}
              key={item.name}
              title={item.name}
              imageSrc={item.imagePath}
              price={item.priceInCents / 100}
              description={item.description}
              availableColors={item.color}
              availableSizes={item.size}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
