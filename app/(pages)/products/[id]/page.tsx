// "use client";
import { useCartStore } from "@/reducers/useCartStore";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import useProductStore from "@/reducers/useProductStore";
import { LoaderContext } from "@/context/LoaderProvider";
import { AlertContext } from "@/context/AlertProvider";
import {
  getProductById,
  getProducts,
  getProductsByCategory,
} from "@/app/api/product";
import "@/styles/components/_productDetail.css";
import { get } from "http";


export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}) {
  try {
    const product = await getProductById(Number(params.id));
    if (!product)
      return {
        title: "Not Found",
        description: "The page you are looking for does not exist.",
      };

    return {
      title: product.title,
      description: product.description,
      alternates: {
        canonical: `/products/${product.id}`,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist.",
    };
  }
}

export async function generateStaticParams() {
  const posts = await getProducts();

  if (!posts) return [];

  return posts.map((post: Product) => ({
    id: post.id.toString(),
  }));
}

const ProductDetail = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const post = await getProductById(Number(id));
  if (!post) return null;

  const categoryProducts = await getProductsByCategory(post.category);

  return (
    <div className="product_detail_container flex flex-col items-center justify-center w-full px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 md:px-8 lg:px-16 lg:py-16 bg-white">
        <Image src={post.image} alt={post.title} width={300} height={300} />
        <div className="flex flex-col justify-center items-start space-y-4 w-full lg:w-1/2 px-4 lg:px-0 lg:py-8 md:py-8 lg:py-0">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-gray-600 text-justify">{post.description}</p>

          <p className="text-gray-600">Price: ${post.price}</p>

          <div className="flex space-x-4 justify-center">
            <button className="bg-black text-white px-4 py-2 rounded-md border border-black hover:bg-white hover:text-black transition duration-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* similar products  */}
      <div className="flex flex-col items-center justify-center md:px-8 lg:px-16 lg:py-16 bg-white">
        <h1 className="text-2xl font-bold">Similar Products</h1>
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {categoryProducts?.map((product: Product, index: number) => (
            <ProductCard key={index} {...product} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
