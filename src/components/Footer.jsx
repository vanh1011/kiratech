import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://facebook.com/KiraTech" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <span className="font-bold">Zalo</span>
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center mb-2">
              <Phone className="h-4 w-4 mr-2" />
              <span>0945988937</span>
            </div>
            <a href="https://facebook.com/KiraTech" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              Fanpage Facebook: KiraTech
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button onClick={() => alert('Chat feature coming soon!')} className="flex items-center hover:text-gray-300 mx-auto">
            <MessageCircle className="h-6 w-6 mr-2" />
            <span>Chat với chúng tôi</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;