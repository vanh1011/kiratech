import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Premium Store</Link>
        <nav className="flex items-center">
          <ul className="flex space-x-4 mr-4">
            <li><Link to="/" className="hover:text-gray-300">Trang chủ</Link></li>
          </ul>
          <Link to="/cart" className="text-white hover:text-gray-300">
            <ShoppingCart className="h-6 w-6" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;