"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import { getAllProducts } from "../../api/product";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

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
      {/* Carousel Section */}
      <div
        className="flex flex-col-reverse w-full border-b-2 cursor-pointer border-gray-200 lg:flex-row lg:justify-between lg:items-center lg:px-20 lg:py-10 lg:w-9/12 mx-auto"
        onClick={() => router.push(`/products/${randomProduct?.id}`)}
      >
        <div className="flex flex-col justify-end align-center w-9/12 p-8 mx-auto">
          <h1 className="font-bold mb-2 lg:text-3xl md:text-2xl text-xl">
            {randomProduct?.title}
          </h1>
          <p className="text-gray-600 mb-4 truncate block capitalize">
            {randomProduct?.description}
          </p>
          <p className="text-green-500 font-bold text-2xl">
            ${randomProduct?.price}{" "}
            <span className="text-gray-600 line-through text-lg">
              ${randomProduct?.price + 100}
            </span>
          </p>
        </div>
        <div className="flex justify-center mx-auto">
          <img
            src={randomProduct?.image}
            alt="carousel image"
            className="rounded-t-xl object-contain mt-4 lg:mt-0 w-full h-52 lg:w-full lg:h-72"
          />
        </div>
      </div>

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
