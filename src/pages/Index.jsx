import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: 'YouTube Premium',
    description: 'Xem video không quảng cáo, tải xuống và phát trong nền',
    options: [
      { duration: '1 tháng', price: 50000 },
      { duration: '6 tháng', price: 270000 },
      { duration: '12 tháng', price: 500000 },
    ],
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Spotify Premium',
    description: 'Nghe nhạc không quảng cáo, tải xuống và chất lượng cao',
    options: [
      { duration: '1 tháng', price: 40000 },
      { duration: '6 tháng', price: 220000 },
      { duration: '12 tháng', price: 400000 },
    ],
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Netflix Premium',
    description: 'Xem phim và series TV không giới hạn',
    options: [
      { duration: '1 tháng', price: 180000 },
      { duration: '6 tháng', price: 1000000 },
      { duration: '12 tháng', price: 1800000 },
    ],
    image: '/placeholder.svg'
  },
];

const Index = () => {
  return (
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
                  <div key={index} className="flex justify-between items-center">
                    <span>{option.duration}</span>
                    <span>{option.price.toLocaleString()} VND</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="w-1/2">Thêm vào giỏ hàng</Button>
              <Link to={`/product/${product.id}`} className="w-1/2 ml-2">
                <Button variant="outline" className="w-full">Xem chi tiết</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;