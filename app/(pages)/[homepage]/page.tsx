"use client";
import React, { useEffect } from "react";
import ProductCard from "../../../components/ProductCard";
import useProductStore from "@/reducers/useProductStore";
import { LoaderContext } from "@/context/LoaderProvider";
import Hero from "./hero";
import { AlertContext } from "@/context/AlertProvider";
import Head from "next/head";

const HomePage = () => {
  const { products, getAllProducts } = useProductStore();
  const { setLoading } = React.useContext(LoaderContext);
  const { showAlert } = React.useContext(AlertContext);
  const [key, setKey] = React.useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      setKey((prevKey) => prevKey + 1);
      try {
        setLoading(true);
        await getAllProducts();
      } catch (error) {
        setLoading(true);
        showAlert(true, "error", "Error fetching products", key);
        setTimeout(() => {
          showAlert(false, "error", "Error fetching products", key);
        }, 2000);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const randomProduct = products[Math.floor(Math.random() * products.length)];

  return (
    <div className="flex flex-col min-h-96">
      {/* Hero Section */}
      <Hero {...randomProduct} />

      {/* Products Section */}
      <div className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">Our Products</h1>
          <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {products?.map((product: any, index: number) => (
              <ProductCard key={index} {...product} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
