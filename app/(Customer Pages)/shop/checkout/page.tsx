"use client";
import React, { useState } from "react";

const CheckoutPage: React.FC = () => {
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    address: "",
    city: "",
  });

  const totalCost = 200; // Example total cost
  const upfrontPayment = totalCost * 0.5; // 50% upfront payment

  const handlePlaceOrder = () => {
    alert(
      "Thank you for your order! We will verify your payment and process your order shortly."
    );
    // Implement actual order placement logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-50 py-36">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
          Checkout
        </h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Shipping Address
          </h3>
          <input
            type="text"
            placeholder="Full Name"
            value={shippingAddress.name}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, name: e.target.value })
            }
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="Address"
            value={shippingAddress.address}
            onChange={(e) =>
              setShippingAddress({
                ...shippingAddress,
                address: e.target.value,
              })
            }
            className="w-full p-2 mb-4 border rounded"
          />
          <input
            type="text"
            placeholder="City"
            value={shippingAddress.city}
            onChange={(e) =>
              setShippingAddress({ ...shippingAddress, city: e.target.value })
            }
            className="w-full p-2 mb-4 border rounded"
          />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Payment Information
          </h3>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <p className="text-gray-900 font-semibold text-lg mb-2">
              Total Cost: ${totalCost.toFixed(2)}
            </p>
            <p className="text-gray-900 font-semibold text-lg mb-4">
              Amount to Pay Upfront: ${upfrontPayment.toFixed(2)}
            </p>
            <p className="text-gray-700 mb-2">
              Please transfer 50% of the total amount to one of the following
              accounts:
            </p>
            <ul className="text-gray-700 mb-4">
              <li>Bank Account: 123456789 (Bank Name)</li>
              <li>Telebirr: 0987654321</li>
            </ul>
            <p className="text-gray-800 font-semibold">
              Important: Please specify "shein--{shippingAddress.name}" as the
              reason for your bank transfer to avoid delays in processing your
              order.
            </p>
          </div>
        </div>

        <button
          onClick={handlePlaceOrder}
          className="w-full bg-black text-white p-4 rounded-lg font-semibold"
        >
          Place Order - I Have Paid
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
