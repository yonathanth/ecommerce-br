"use client";
import Image from "next/image";
import NavBar from "./Nav"; // Assuming NavBar.js is in the same directory
import Link from "next/link";
import { motion } from "framer-motion"; // Import Framer Motion

// Define variants for different elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -100 }, // Start from left (x: -100)
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.3 }, // Slight delay for paragraph
  },
};

const buttonVariants = {
  hidden: { opacity: 0, x: -100 }, // Button starts from the left
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut", delay: 0.6 }, // Longer delay for button
  },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-seventy relative">
      {/* Full-Screen Background Image */}
      <motion.div
        className="absolute inset-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/four.png"
          alt="Shopping girl"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          quality={100}
        />
      </motion.div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col h-full">
        <NavBar />
        {/* Hero Section */}
        <section className="flex flex-col items-start md:items-start justify-center h-full text-center md:text-left lg:px-24 px-6 mt-20 lg:mt-5">
          <div className="max-w-lg text-white ml-7 md:ml-14">
            {/* Heading Animation */}
            <motion.h1
              className="text-[45px] leading-relaxed lg:text-7xl font-extrabold text-accentthirty lg:leading-snug text-center md:text-left poppins-font mb-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              Elevate your Style with Brukti’s Shopping
            </motion.h1>

            {/* Paragraph Animation */}
            <motion.p
              className="text-xl mt-6 text-thirty leading-relaxed lg:text-left text-center"
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
            >
              Endless shopping opportunities
            </motion.p>

            {/* Button Animation */}
            <div className="mt-8 lg:text-left text-center">
              <Link href="/shop">
                <motion.button
                  className="bg-gradient-to-br from-thirty to-accentthirty text-lg text-white px-6 py-3 rounded-full shadow-xl l w-48  relative"
                  variants={buttonVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-thirty to-accentthirty rounded-full blur-md opacity-50 -z-10"></span>
                  Shop Now
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
