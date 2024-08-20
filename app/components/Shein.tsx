"use client";
import React, { useState } from "react";

const ProductInquirySection: React.FC = () => {
  const [productLink, setProductLink] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleScrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    productsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-center pt-8">
      <div className="bg-gradient-to-r w-[80vw] from-pink-100 via-pink-50 to-pink-100 py-12 px-6 sm:px-12 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 text-center mb-8">
          Already Have a Product from SHEIN?
        </h2>
        <p className="text-center text-gray-800 mb-6">
          Paste the link of the product below and add any remarks on color or
          other preferences.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Paste SHEIN product link here"
            value={productLink}
            onChange={(e) => setProductLink(e.target.value)}
            className="w-full lg:w-1/3 p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500"
          />
          <textarea
            placeholder="Add any remarks (e.g., color, size)"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
            className="w-full lg:w-1/3 p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-pink-500 focus:border-pink-500 h-24 resize-none"
          ></textarea>
        </div>

        <div className="flex flex-col justify-center items-center gap-8">
          <button
            className="bg-pink-500 text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition duration-200"
            onClick={() => alert("Link submitted!")}
          >
            Submit
          </button>
          <button
            className="bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition duration-200"
            onClick={handleScrollToProducts}
          >
            Not sure? Shop our products here!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInquirySection;
