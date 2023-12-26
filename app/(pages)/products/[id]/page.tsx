"use client";
import { useCartStore } from "@/reducers/useCartStore";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { Product } from "@/types/product";
import { getProductById, getProductsByCategory } from "../../../api/product";
import Alert from "@/components/Alert";
import "@/styles/components/_productDetail.css";
import Head from "next/head";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const [key, setKey] = React.useState(0);
  const [showAlert, setShowAlert] = React.useState(false);
  const [product, setProduct] = React.useState<Product | null>(null);
  const [similarProducts, setSimilarProducts] = React.useState<Product[]>([]);

  const addToCart = useCartStore((state) => state.addToCart);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await getProductById(Number(id));
      const productsBycategory = await getProductsByCategory(
        response.category as string
      );
      setProduct(response);
      setSimilarProducts(productsBycategory);
    };

    fetchData();
  }, [id]);

  if (!product) {
    return null;
  }

  const { title, description, image, price } = product;

  const handleAddToCart = () => {
    setKey((prevKey) => prevKey + 1);
    addToCart(product as Product);
    setShowAlert(true);
  };

  const handleBuyNow = () => {
    alert("not implemented");
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Modern T-shirt and Hoodies for your everyday style."
          key="desc"
        />
        <meta name="og:image" content={image} key="og-image" />
        <meta name="og:title" content={title} key="og-title" />
        <meta name="og:description" content={description} key="og-desc" />
        <meta name="keywords" content="men-style" />
        <meta name="author" content="Gaurav Sah" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="product_detail_container flex flex-col items-center justify-center w-full px-4 lg:px-0">
        <Alert
          type="success"
          message="Product added to cart"
          show={showAlert}
          key={key}
        />
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
              <button
                onClick={handleBuyNow}
                className="bg-white text-black px-4 py-2 rounded-md border border-black transition duration-500 hover:bg-gray-200"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center md:px-8 lg:px-16 py-8 lg:py-16 bg-white">
          <h1 className="text-2xl font-bold">More Images</h1>
          <div className="flex flex-wrap justify-center items-center space-x-4">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={title}
                width={100}
                height={100}
                className="rounded-md"
              />
            ))}
          </div>
        </div> */}

        {/* similar products  */}
        <div className="flex flex-col items-center justify-center md:px-8 lg:px-16 lg:py-16 bg-white">
          <h1 className="text-2xl font-bold">Similar Products</h1>
          <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {similarProducts?.slice(0, 4).map((product, index) => (
              <ProductCard key={index} {...product}/>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
