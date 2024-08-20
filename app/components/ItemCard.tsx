"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { HiOutlineShoppingCart } from "react-icons/hi2";

interface ItemCardProps {
  title: string;
  imageSrc: string;
  price: string;
  description: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  imageSrc,
  price,
  description,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 shadow-lg p-4 m-2 sm:p-6 sm:m-4 w-48 sm:w-64 hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <img
        src={imageSrc}
        alt={title}
        className="h-24 w-24 sm:h-32 sm:w-32 object-cover rounded-lg mb-4 transition-transform transform hover:scale-105 duration-300"
      />
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-700 mb-4 text-center font-semibold">{price}</p>

      <div className="flex justify-center">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
              Add to Cart
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-96 max-w-full">
              <Dialog.Title className="text-2xl font-semibold mb-4 text-center">
                {title}
              </Dialog.Title>
              <img
                src={imageSrc}
                alt={title}
                className="h-48 w-full object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-4 text-center">{description}</p>
              <p className="text-gray-900 font-semibold mb-4 text-center">
                {price}
              </p>

              <div className="flex items-center justify-center mb-4">
                <button
                  onClick={decreaseQuantity}
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200"
                >
                  -
                </button>
                <span className="mx-4 text-lg">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => alert(`Added ${quantity} ${title}(s) to cart!`)}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-200"
              >
                Confirm
              </button>

              <Dialog.Close asChild>
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg w-full mt-4 hover:bg-red-600 transition duration-200">
                  Close
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
};

export default ItemCard;
