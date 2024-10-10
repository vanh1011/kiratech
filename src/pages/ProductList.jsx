import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const ProductList = () => {
  return (
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
              onClick={() => addToCart(product, selectedOptions[product.id])}
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
  );
};

export default ProductList;
