import React from 'react';
import Header from '../components/Header';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

const CartPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Giỏ hàng của bạn</h1>
        <Cart />
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;