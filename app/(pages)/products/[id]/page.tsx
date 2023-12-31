"use client";
import { useCartStore } from "@/reducers/useCartStore";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Product } from "@/types/product";
import "@/styles/components/_productDetail.css";
import Head from "next/head";
import ProductCard from "@/components/ProductCard";
import useProductStore from "@/reducers/useProductStore";
import { LoaderContext } from "@/context/LoaderProvider";
import { AlertContext } from "@/context/AlertProvider";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = useParams();
  const [key, setKey] = React.useState(0);
  const { setLoading } = React.useContext(LoaderContext);
  const { showAlert } = React.useContext(AlertContext);
  const {
    singleProduct,
    getSingleProduct,
    categoryProducts,
    getCategoryProducts,
  } = useProductStore();

  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    const fetchData = async () => {
      setKey((prevKey) => prevKey + 1);
      try {
        setLoading(true);
        await getSingleProduct(Number(id));
        await fetchCategoryProducts();
      } catch (error) {
        setLoading(true);
        showAlert(true, "error", "Error fetching detail", key);
        setTimeout(() => {
          showAlert(false, "error", "Error fetching detail", key);
        }, 2000);
      } finally {
        setLoading(false);
      }
    };
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);
        await getCategoryProducts(singleProduct?.category as string);
      } catch (error) {
        setLoading(true);
        showAlert(true, "error", "Error fetching detail", key);
        setTimeout(() => {
          showAlert(false, "error", "Error fetching detail", key);
        }, 2000);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (!singleProduct) {
    return null;
  }

  const { title, description, image, price } = singleProduct;

  const handleAddToCart = () => {
    setLoading(true);
    setKey((prevKey) => prevKey + 1);
    addToCart(singleProduct as Product);
    showAlert(true, "success", "Product added to cart", key);
    setTimeout(() => {
      showAlert(false, "success", "Product added to cart", key);
    }, 3000);
    setLoading(false);
  };
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Primary Meta Tags --> */}
        <title>{title} | Online Store</title>
        <meta name="title" content={`${title} | Online Store`} />
        <meta name="description" content={description.slice(0, 100) + "..."} />

        <meta
          property="og:url"
          content={`https://online-store-gauravsahdz.vercel.app/products/${id}`}
        />
        <meta property="og:title" content={`${title} | Online Store`} />
        <meta
          property="og:description"
          content={description.slice(0, 100) + "..."}
        />
        <meta property="og:image" content={image} />
      </Head>
      <div className="product_detail_container flex flex-col items-center justify-center w-full px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 md:px-8 lg:px-16 lg:py-16 bg-white">
          <Image src={image} alt={title} width={300} height={300} />
          <div className="flex flex-col justify-center items-start space-y-4 w-full lg:w-1/2 px-4 lg:px-0 lg:py-8 md:py-8 lg:py-0">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-gray-600 text-justify">{description}</p>

            <p className="text-gray-600">Price: ${price}</p>

            <div className="flex space-x-4 justify-center">
              <button
                onClick={handleAddToCart}
                className="bg-black text-white px-4 py-2 rounded-md border border-black hover:bg-white hover:text-black transition duration-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* similar products  */}
        <div className="flex flex-col items-center justify-center md:px-8 lg:px-16 lg:py-16 bg-white">
          <h1 className="text-2xl font-bold">Similar Products</h1>
          <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {categoryProducts?.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
