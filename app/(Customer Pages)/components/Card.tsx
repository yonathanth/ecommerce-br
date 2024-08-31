import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc }) => {
  return (
    <Link href={`/shop#${title}`}>
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
        <img
          src={imageSrc}
          alt={title}
          className="h-24 w-24 sm:h-32 sm:w-32 object-cover rounded-full mb-4 shadow-md transition-transform transform hover:scale-110 duration-300 ease-in-out"
        />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
