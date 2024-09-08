import Link from "next/link";
import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc }) => {
  return (
    <Link href={`#${title}`}>
      <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg border border-gray-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 p-6 hover:shadow-2xl">
        <div className="relative h-28 w-28 sm:h-36 sm:w-36 mb-4">
          <Image
            src={imageSrc}
            fill
            alt={title}
            className="object-cover rounded-full shadow-lg transition-transform transform hover:scale-110 duration-300"
          />
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default Card;
