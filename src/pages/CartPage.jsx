import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CartPage = () => {
  const [email, setEmail] = useState("");
  const [zaloPhone, setZaloPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý thanh toán ở đây
    console.log("Thanh toán với:", { email, zaloPhone, address });
    // Chuyển hướng đến trang thông tin thanh toán
    navigate("/payment-info");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Giỏ hàng của bạn</h1>
        <Cart />
        <div className="mt-8">
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
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
