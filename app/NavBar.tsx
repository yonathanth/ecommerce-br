"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaStore, FaUser } from "react-icons/fa"; // Importing icons
import { FaShoppingCart } from "react-icons/fa"; // Cart Icon
import { usePathname } from "next/navigation";
import CartModal from "./components/CartModal";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isCartOpen, setIsCartOpen] = useState(false); // Cart state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Toggle cart modal
  };

  const isActive = (href: string) => pathname === href;

  const links = [
    { label: <FaHome size={24} />, href: "/" },
    { label: <FaStore size={24} />, href: "/shop" },
    { label: <FaUser size={24} />, href: "/login" },
  ];

  return (
    <>
      <nav className="bg-transparent absolute top-0 left-0 w-full z-30">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Mobile Menu Button */}
            <div className="sm:flex md:hidden flex items-center">
              <button
                className="text-gray-800 focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="text-[#572772]  font-extrabold mt-2 text-3xl mx-auto md:mx-0"
            >
              Brikti's
            </Link>

            {/* Icons with Oval Shape */}
            <div className="relative hidden md:flex items-center justify-center space-x-12 md:ml-auto bg-[#EDE3FA]/90 p-2 rounded-full shadow-lg">
              <ul className="flex items-center space-x-8">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`font-poppins text-xl transition duration-300 flex items-center justify-center p-4 rounded-full ${
                        isActive(link.href)
                          ? "text-[#572772]"
                          : "hover:text-[#572772]"
                      } relative`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cart Button - Now Always Visible */}
            <button
              className="relative sm:ml-auto sm:mr-4 bg-[#572772] text-white p-2 rounded-full hover:bg-[#3E1F4B] transition duration-300"
              onClick={toggleCart}
              aria-label="Toggle Cart"
            >
              <FaShoppingCart size={24} />
              <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#EDE3FA]/90 backdrop-blur-md overflow-hidden transition-all duration-500 ease-in-out transform ${
            isOpen
              ? "max-h-screen opacity-100 scale-100"
              : "max-h-0 opacity-0 scale-95"
          }`}
        >
          <ul className="flex flex-col space-y-4 p-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    "text-gray-800 hover:text-blue-600 font-medium transition duration-300"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && <CartModal isOpen={isCartOpen} toggleCart={toggleCart} />}
    </>
  );
};

export default NavBar;
