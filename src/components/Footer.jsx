import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <span className="font-bold">Zalo</span>
            </a>
          </div>
          <button onClick={() => alert('Chat feature coming soon!')} className="flex items-center hover:text-gray-300">
            <MessageCircle className="h-6 w-6 mr-2" />
            <span>Chat với chúng tôi</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;