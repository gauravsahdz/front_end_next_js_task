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
    <>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Online Store</title>
        <meta name="title" content="Online Store" />
        <meta
          name="description"
          content="Shop Clothing, personalizations, regular use, ornaments, ect...."
        />
        <meta
          property="og:image:secure_url"
          content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/OnlineStore/Shop%20what%20you%20need%20before%20it%20gets%20away/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F4148343e-28ad-46af-bd12-4a5b3a4535dd.jpg%3Ftoken%3Dw2GvI2CKmpv4N3xkvx_zIHs771wNr9uSGZtq7jf62PQ%26height%3D800%26width%3D1200%26expires%3D33240006197/og.png"
        />
        <meta
          property="og:url"
          content="https://online-store-gauravsahdz.vercel.app/"
        />
        <meta property="og:title" content="Online Store" />
        <meta
          property="og:description"
          content="Shop Clothing, personalizations, regular use, ornaments, ect...."
        />
      </Head>

      <div className="flex flex-col min-h-96">
        {/* Hero Section */}
        <Hero {...randomProduct} />

        {/* Products Section */}
        <div className="flex-grow">
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">
              Our Products
            </h1>
            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
              {products?.map((product: any, index: number) => (
                <ProductCard key={index} {...product} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
