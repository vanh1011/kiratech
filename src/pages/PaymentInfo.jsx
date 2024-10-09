import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import { Copy, Facebook, MessageCircle, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PaymentInfo = () => {
  const navigate = useNavigate();
  const [showContactInfo, setShowContactInfo] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success('Đã sao chép vào clipboard');
    });
  };

  const handleConfirmPayment = () => {
    setShowContactInfo(true);
    toast.success('Cảm ơn bạn đã xác nhận thanh toán!');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Thông tin chuyển khoản</h1>
        <div className="space-y-4">
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
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Mã QR thanh toán</h3>
          <img src="/images/payment-qr.jpg" alt="Mã QR thanh toán" className="max-w-full h-auto" />
        </div>
        <Button className="mt-6" onClick={handleConfirmPayment}>
          Xác nhận đã chuyển khoản
        </Button>
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

export default PaymentInfo;