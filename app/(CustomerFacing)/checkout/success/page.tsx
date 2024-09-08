"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SuccessPage: React.FC = () => {
  const router = useRouter();

  const handleContinueShopping = () => {
    router.push("/shop"); // Redirect to shop
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md text-center space-y-6">
        <h2 className="text-3xl font-bold text-purple-600">Order Placed!</h2>
        <p className="text-lg text-gray-700">
          Thank you for your purchase. We have received your order and will give
          you a confirmation call soon.
        </p>
        <button
          onClick={handleContinueShopping}
          className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
