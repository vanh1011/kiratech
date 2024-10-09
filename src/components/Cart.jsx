import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const updateQuantity = (productId, optionIndex, newQuantity) => {
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.productId === productId && item.optionIndex === optionIndex
          ? { ...item, quantity: Math.max(0, newQuantity) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (productId, optionIndex) => {
    setCartItems(prevItems => 
      prevItems.filter(item => 
        !(item.productId === productId && item.optionIndex === optionIndex)
      )
    );
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Giỏ hàng</CardTitle>
      </CardHeader>
      <CardContent>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.duration} - {item.price.toLocaleString()} VND</p>
                </div>
                <div className="flex items-center">
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.productId, item.optionIndex, item.quantity - 1)}>-</Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.productId, item.optionIndex, item.quantity + 1)}>+</Button>
                  <Button variant="destructive" size="sm" className="ml-2" onClick={() => removeItem(item.productId, item.optionIndex)}>Xóa</Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <strong>Tổng cộng:</strong>
        <span>{totalPrice.toLocaleString()} VND</span>
      </CardFooter>
    </Card>
  );
};

export default Cart;