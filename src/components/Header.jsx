import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold flex items-center">
          <Link to="/" className="hover:text-gray-300 flex items-center">
            <img
              src="/images/logo.PNG"
              alt="logo"
              className="w-11 h-10 mr-2"
            />
            <p>Kira Tech</p>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-300 flex items-center">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-gray-300 flex items-center"
            >
              Sản phẩm
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-300 flex items-center"
            >
              Liên lạc
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-gray-300 flex items-center relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;