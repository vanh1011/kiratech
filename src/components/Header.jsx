import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Premium Store</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-gray-300">Trang chủ</Link></li>
            <li><Link to="#" className="hover:text-gray-300">Giỏ hàng</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;