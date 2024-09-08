"use client";
import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useCart } from "../../providers/cartContext"; // import your context
import { formatCurrency } from "@/lib/formatters"; // import formatCurrency
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface ItemCardProps {
  id: string;
  title: string;
  imageSrc: string;
  price: number;
  description: string;
  availableSizes: string;
  availableColors: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  id,
  title,
  imageSrc,
  price,
  description,
  availableSizes = [],
  availableColors = [],
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Manage Dialog open state
  const { addToCart } = useCart(); // get addToCart from context
  const { data: session, status } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status !== "loading") {
      setLoading(false);
    }
  }, [status]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-purple-400">
          <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
            <p className="text-gray-600">Checking session...</p>
          </div>
        </div>
      );
    }
    if (!session) {
      router.push("./login");
    }

    addToCart({
      id,
      name: title,
      price,
      quantity,
      image: imageSrc,
    });
    setIsDialogOpen(false); // Close the Dialog after adding to cart
  };

  return (
    <div className="flex flex-col items-center bg-white border-purple-200  shadow-lg pb-6 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-purple-700 duration-300 ease-in-out">
      <Image
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        alt={title}
        className="h-48 w-full object-cover mb-4"
      />
      <h3 className="text-xl font-mono font-semibold text-gray-700 mb-2 text-center">
        {title}
      </h3>
      <p className="text-gray-700 mb-4 text-center font-sans ">
        {formatCurrency(price)}
      </p>

      <div className="flex justify-center">
        <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <Dialog.Trigger asChild>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="bg-purple-600 text-white py-2 px-4 rounded-sm hover:bg-purple-700 transition duration-200 md:w-48"
            >
              Add to Cart
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
            <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl max-w-md w-[90vw] md:w-[60vw] lg:w-[40vw]">
              <Dialog.Title className="text-2xl font-bold mb-4 text-center text-purple-900">
                {title}
              </Dialog.Title>
              <Image
                src={imageSrc}
                alt={title}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 mb-4 text-center">{description}</p>
              <p className="text-purple-700 font-semibold mb-4 text-center">
                {formatCurrency(price)}
              </p>

              <div className="text-center mb-4">
                <p className="text-purple-700 mb-2">
                  <strong>Available Sizes:</strong>{" "}
                  {availableSizes.length > 0 ? availableSizes : "Not available"}
                </p>
                <p className="text-purple-700 mb-4">
                  <strong>Available Colors:</strong>{" "}
                  {availableColors.length > 0
                    ? availableColors
                    : "Not available"}
                </p>
                <p className="text-gray-500 text-sm">
                  You will receive a call to confirm your preferred size and
                  color.
                </p>
              </div>

              <div className="flex items-center justify-center mb-4">
                <button
                  onClick={decreaseQuantity}
                  className="bg-purple-200 text-purple-900 py-2 px-4 rounded-lg hover:bg-purple-300 transition duration-200"
                >
                  -
                </button>
                <span className="mx-4 text-lg text-purple-900">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="bg-purple-200 text-purple-900 py-2 px-4 rounded-lg hover:bg-purple-300 transition duration-200"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full hover:bg-purple-700 transition duration-200"
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
