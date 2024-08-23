// components/AdminNavbar.js

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function AdminNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Admin Dashboard Logo */}
          <div className="text-white text-2xl font-bold">
            <Link href="/admin">Admin Dashboard</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:flex md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/admin/products"
              className="text-white hover:text-gray-300"
            >
              Products
            </Link>
            <Link
              href="/admin/orders"
              className="text-white hover:text-gray-300"
            >
              Orders
            </Link>
            <Link
              href="/admin/users"
              className="text-white hover:text-gray-300"
            >
              Users
            </Link>
            <Link href="/logout" className="text-white hover:text-gray-300">
              Logout
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-gray-800 transition-all duration-500 ease-in-out transform ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                href="/admin/products"
                className="text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/admin/orders"
                className="text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                href="/admin/users"
                className="text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                href="/logout"
                className="text-white hover:text-gray-300"
                onClick={() => setIsOpen(false)}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
