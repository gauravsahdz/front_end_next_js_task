"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import { getAllProducts } from "../../api/product";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import Hero from "./hero";

const HomePage = () => {
  const router = useRouter();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllProducts();
      setProductList(response);
    };

    fetchData();
  }, []);

  const randomProduct: Product =
    productList[Math.floor(Math.random() * productList.length)];

  return (
    <div className="flex flex-col min-h-96">
      {/* Hero Section */}
      <Hero {...randomProduct} />

      {/* Products Section */}
      <div className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">Our Products</h1>
          <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
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
