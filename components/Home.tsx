"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Image from "next/image";
import hero from "../public/images/hero.jpg";
import { getAllProducts } from "../app/api/product";

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllProducts();
      setProductList(response);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Carousel Section */}
      <div className="relative">
        <Image
          src={hero}
          alt="carousel image"
          layout="responsive" // Use 'responsive' layout mode
          width={300}
          height={400}
        />
      </div>

      {/* Products Section */}
      <div className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Our Products</h1>
          <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {productList?.map((product: any, index: number) => (
              <ProductCard key={index} {...product} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
