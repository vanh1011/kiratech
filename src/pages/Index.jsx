import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { products } from "../data/products";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleOptionSelect = (productId, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [productId]: option,
    }));
  };
  const addToCart = (product, option) => {
    const newItem = {
      productId: product.id,
      name: product.name,
      duration: option.duration,
      price: option.price,
      quantity: 1,
      optionIndex: product.options.indexOf(option),
    };

    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.productId === newItem.productId &&
          item.duration === newItem.duration
      );

      if (existingItemIndex > -1) {
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, newItem];
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500">
            Về Chúng Tôi
          </h2>
          <p className="text-xl mb-6 leading-relaxed text-gray-700 hover:text-gray-900 transition-colors duration-300">
            Chúng tôi cung cấp các dịch vụ Premium chất lượng cao, giúp bạn tận
            hưởng trải nghiệm tốt nhất. Với đội ngũ chuyên gia giàu kinh nghiệm,
            chúng tôi cam kết mang đến sự hài lòng cho khách hàng.
          </p>
          <p className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
            Khám phá các gói dịch vụ đa dạng của chúng tôi và nâng cao trải
            nghiệm của bạn ngay hôm nay!
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Đánh Giá Từ Khách Hàng
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-green-100 p-6 rounded-lg shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-800">
                  Nguyễn Văn A
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-green-700 leading-relaxed">
                  "Dịch vụ tuyệt vời! Tôi rất hài lòng với trải nghiệm Premium.
                  Chắc chắn sẽ tiếp tục sử dụng."
                </p>
              </CardContent>
            </Card>
            <Card className="bg-green-100 p-6 rounded-lg shadow-md mt-4">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-800">
                  Trần Thị B
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-green-700 leading-relaxed">
                  "Chất lượng dịch vụ vượt xa mong đợi. Đội ngũ hỗ trợ rất nhiệt
                  tình và chuyên nghiệp."
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <h1 className="text-4xl font-bold mb-8 text-center">Dịch vụ Premium</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-88 w-88 object-cover mb-4"
                />
                <div className="space-y-2">
                  {product.options.map((option, index) => (
                    <Button
                      key={index}
                      variant={
                        selectedOptions[product.id] === option
                          ? "default"
                          : "outline"
                      }
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
                  onClick={() =>
                    addToCart(product, selectedOptions[product.id])
                  }
                >
                  Thêm vào giỏ hàng
                </Button>
                <Link to={`/product/${product.id}`} className="w-1/2 ml-2">
                  <Button variant="outline" className="w-full">
                    Xem chi tiết
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
