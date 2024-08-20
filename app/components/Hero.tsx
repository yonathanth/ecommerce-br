"use client";
import Image from "next/image";
import { Poppins } from "next/font/google";

// Import Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const HeroSection = () => {
  return (
    <section>
      <div className="relative h-[100vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/a-small-shopping-cart-with-a-cellphone-inside-it.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
        </div>

        {/* Text Content */}
        <div
          className={`relative z-10 flex flex-col justify-center h-full px-6 md:px-20 text-center md:text-left items-center md:items-start ${poppins.className}`}
        >
          <div className="max-w-lg  pt-5">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight lg:leading-snug animate-fadeInUp">
              Never Go Out of Style, with Brikti's Collections
            </h1>
            <p className="mt-4 text-lg lg:text-2xl text-blue-900 animate-fadeInUp delay-150">
              Explore a World Full of Fashion
            </p>
            <button className="mt-8 inline-block bg-[#EDE3FA] text-black font-medium py-3 px-8 rounded-full shadow-lg hover:bg-red-400 transition duration-300 ease-in-out animate-fadeInUp delay-300">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
