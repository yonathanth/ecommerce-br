"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

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
    <div className="flex flex-col items-center bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 border border-gray-200 shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
      <img
        src={imageSrc}
        alt={title}
        className="h-32 w-32 object-cover rounded-full mb-4 shadow-md transition-transform transform hover:scale-110 duration-300 ease-in-out"
      />
      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-800 mb-4 text-center font-semibold">{price}</p>

      <div className="flex justify-center">
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition duration-200">
              Add to Cart
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
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
                className="bg-pink-500 text-white py-2 px-4 rounded-lg w-full hover:bg-pink-600 transition duration-200"
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
