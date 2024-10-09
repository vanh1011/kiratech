import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from '../data/products';
import Header from '../components/Header';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedOption, setSelectedOption] = useState(null);

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Quay lại trang chủ</Link>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
            <p className="mb-4">{product.fullDescription}</p>
            <div className="space-y-2">
              {product.options.map((option, index) => (
                <Button
                  key={index}
                  variant={selectedOption === option ? "default" : "outline"}
                  className="w-full justify-between"
                  onClick={() => setSelectedOption(option)}
                >
                  <span>{option.duration}</span>
                  <span>{option.price.toLocaleString()} VND</span>
                </Button>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              disabled={!selectedOption}
              onClick={() => alert('Chức năng thêm vào giỏ hàng chưa được triển khai')}
            >
              {selectedOption
                ? `Thêm vào giỏ hàng - ${selectedOption.price.toLocaleString()} VND`
                : 'Chọn thời hạn để thêm vào giỏ hàng'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;