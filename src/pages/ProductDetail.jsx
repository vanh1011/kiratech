import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: 'YouTube Premium',
    description: 'Xem video không quảng cáo, tải xuống và phát trong nền',
    fullDescription: 'YouTube Premium cung cấp trải nghiệm xem video tuyệt vời không bị gián đoạn bởi quảng cáo. Bạn có thể tải xuống video để xem offline và phát nhạc trong nền khi sử dụng các ứng dụng khác.',
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
    fullDescription: 'Spotify Premium cho phép bạn thưởng thức âm nhạc với chất lượng cao nhất, không bị gián đoạn bởi quảng cáo. Bạn có thể tải nhạc để nghe offline và tận hưởng nhiều tính năng độc quyền.',
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
    fullDescription: 'Netflix Premium mang đến cho bạn kho phim, series TV, và nội dung độc quyền khổng lồ. Bạn có thể xem trên nhiều thiết bị cùng lúc với chất lượng 4K Ultra HD.',
    options: [
      { duration: '1 tháng', price: 180000 },
      { duration: '6 tháng', price: 1000000 },
      { duration: '12 tháng', price: 1800000 },
    ],
    image: '/placeholder.svg'
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  return (
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
              <div key={index} className="flex justify-between items-center border-b py-2">
                <span className="font-semibold">{option.duration}</span>
                <span>{option.price.toLocaleString()} VND</span>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Thêm vào giỏ hàng</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetail;