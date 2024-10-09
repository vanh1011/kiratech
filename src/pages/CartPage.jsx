import React, { useState } from 'react';
import Header from '../components/Header';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook, Phone, MessageCircle, Copy } from 'lucide-react';
import { toast } from 'sonner';

const CartPage = () => {
  const [email, setEmail] = useState('');
  const [zaloPhone, setZaloPhone] = useState('');
  const [address, setAddress] = useState('');
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý thanh toán ở đây
    console.log('Thanh toán với:', { email, zaloPhone, address });
    setShowContactInfo(true);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Đã sao chép vào clipboard');
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Giỏ hàng của bạn</h1>
        <Cart />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Thông tin thanh toán</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="zaloPhone">Số điện thoại Zalo</Label>
                <Input
                  id="zaloPhone"
                  type="tel"
                  value={zaloPhone}
                  onChange={(e) => setZaloPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="address">Địa chỉ</Label>
                <Input
                  id="address"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <Button type="submit">Thanh toán</Button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Thông tin chuyển khoản</h2>
            <div className="space-y-2">
              <p className="flex items-center">
                <strong>Số điện thoại:</strong>
                <span className="ml-2">0945988937</span>
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard('0945988937')}>
                  <Copy className="h-4 w-4" />
                </Button>
              </p>
              <p className="flex items-center">
                <strong>Ngân hàng:</strong>
                <span className="ml-2">Timo</span>
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard('Timo')}>
                  <Copy className="h-4 w-4" />
                </Button>
              </p>
              <p className="flex items-center">
                <strong>Chủ tài khoản:</strong>
                <span className="ml-2">Hồ Việt Anh</span>
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard('Hồ Việt Anh')}>
                  <Copy className="h-4 w-4" />
                </Button>
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-2">Mã QR thanh toán</h3>
              <img src="/images/payment-qr.jpg" alt="Mã QR thanh toán" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
        {showContactInfo && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Liên hệ sau khi thanh toán</h2>
            <div className="flex space-x-4">
              <a href="https://zalo.me/0945988937" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                <MessageCircle className="mr-2" />
                Zalo: 0945988937
              </a>
              <a href="https://wa.me/84945988937" target="_blank" rel="noopener noreferrer" className="flex items-center text-green-600 hover:text-green-800">
                <MessageCircle className="mr-2" />
                WhatsApp
              </a>
              <a href="https://www.facebook.com/KiraTech" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                <Facebook className="mr-2" />
                Facebook
              </a>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;