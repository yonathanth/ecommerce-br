"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa"; // Cart Icon
import { usePathname } from "next/navigation";
import CartModal from "./components/CartModal";
// Importing CartModal component

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
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
  ];

  return (
    <>
      <nav className="bg-gray-200 border-b w-full z-10">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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
              className="text-gray-800 font-bold text-2xl mx-auto md:mx-0"
            >
              Brikti's
            </Link>
            <div className="flex space-x-12">
              {/* Desktop Links */}
              <div className="hidden md:flex md:items-center space-x-6 md:ml-auto">
                <ul className="flex items-center space-x-12 text-gray-800">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`font-medium transition duration-300 ${
                          isActive(link.href)
                            ? "text-yellow-600"
                            : "hover:text-yellow-600"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Cart Button - Now Always Visible */}
              <button
                className="text-gray-800 relative sm:ml-auto sm:mr-4"
                onClick={toggleCart}
                aria-label="Toggle Cart"
              >
                <FaShoppingCart size={24} />
                <span className="absolute top-0 right-0 text-xs bg-yellow-600 text-white rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-gray-200 overflow-hidden transition-all duration-500 ease-in-out transform ${
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
                    "text-gray-800 hover:text-yellow-600 font-medium transition duration-300"
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
