import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products } from "../data/products";

const ProductList = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Danh sách sản phẩm</h1>
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
                  className="w-full h-48 object-cover mb-4"
                />
                <p className="font-bold text-lg mb-2">
                  Giá từ: {product.options[0].price.toLocaleString()} VND
                </p>
              </CardContent>
              <CardFooter>
                <Link to={`/product/${product.id}`} className="w-full">
                  <Button className="w-full">Xem chi tiết</Button>
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

export default ProductList;