"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaBagShopping } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-gray-600 text-gray-100 p-4 md:p-4 relative">
      <div className="flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-3xl text-white font-bold">Brand Tshirt</h1>

        {/* Search Input */}
        <div className="flex items-center space-x-3 md:space-x-5 w-2/3 md:w-auto">
          <input
            className="flex-grow md:flex-grow-0 w-full md:w-80 h-10 md:h-11 border border-white rounded-lg px-3 text-black placeholder-gray-300 "
            placeholder="Search for products"
            type="text"
            aria-label="Search for products"
          />
          <svg
            className="ml-2 md:ml-3 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="white"
          >
            <path d="M10 2a8 8 0 0 1 6.32 12.9l4.38 4.38a1 1 0 0 1-1.41 1.41l-4.38-4.38A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6z" />
          </svg>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden z-50 absolute top-4 right-4">
          <button
            onClick={toggleMenu}
            className="cursor-pointer text-white text-3xl"
            aria-label="Toggle navigation menu"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
          </button>
        </div>

        {/* Navigation Links for Larger Screens */}
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="flex space-x-10 text-white font-medium text-lg md:text-xl">
            <li>
              <Link
                href="/"
                className="hover:text-gray-400 cursor-pointer hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-gray-400 cursor-pointer hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Tshirt"
                className="hover:text-gray-400 cursor-pointer hover:underline"
              >
                Tshirt
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-400 cursor-pointer hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link href="/cart" aria-label="View cart">
      
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    className="w-8 h-8 text-gray-300 transition-transform duration-300 hover:text-blue-600 hover:scale-110"
  >
    <path d="M6 2l2 2h8l2-2"></path>
    <path d="M3 6h18l-1 14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2L3 6z"></path>
    <path d="M9 10v0a3 3 0 0 1 6 0v0"></path>
  </svg>



              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (Right Aligned with Enhanced Background) */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 w-64 h-screen bg-gradient-to-b from-gray-800 via-gray-700 to-emerald-600 z-50 flex flex-col p-6 space-y-5 text-white transition-transform transform duration-300 ease-in-out">
          <button
            onClick={closeMenu}
            className="self-end text-3xl font-bold text-white"
            aria-label="Close menu"
          >
            &times;
          </button>
          <Link
            href="/"
            className="text-lg hover:underline hover:text-gray-300"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg hover:underline hover:text-gray-300"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/Tshirt"
            className="text-lg hover:underline hover:text-gray-300"
            onClick={closeMenu}
          >
            Tshirt
          </Link>
          <Link
            href="/contact"
            className="text-lg hover:underline hover:text-gray-300"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
