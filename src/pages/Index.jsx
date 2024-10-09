import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from '../data/products';
import Header from '../components/Header';

const Index = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (productId, option) => {
    setSelectedOptions(prev => ({
      ...prev,
      [productId]: option
    }));
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Dịch vụ Premium</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
                <div className="space-y-2">
                  {product.options.map((option, index) => (
                    <Button
                      key={index}
                      variant={selectedOptions[product.id] === option ? "default" : "outline"}
                      className="w-full justify-between"
                      onClick={() => handleOptionSelect(product.id, option)}
                    >
                      <span>{option.duration}</span>
                      <span>{option.price.toLocaleString()} VND</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  className="w-1/2"
                  disabled={!selectedOptions[product.id]}
                  onClick={() => alert('Chức năng thêm vào giỏ hàng chưa được triển khai')}
                >
                  Thêm vào giỏ hàng
                </Button>
                <Link to={`/product/${product.id}`} className="w-1/2 ml-2">
                  <Button variant="outline" className="w-full">Xem chi tiết</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;