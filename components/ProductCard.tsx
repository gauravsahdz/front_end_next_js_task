"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { useCartStore } from "@/reducers/useCartStore";
import { LoaderContext } from "@/context/LoaderProvider";
import { AlertContext } from "@/context/AlertProvider";
import Image from "next/image";

const ProductCard = (product: Product) => {
  const router = useRouter();
  const [key, setKey] = React.useState(0);
  const addToCart = useCartStore((state) => state.addToCart);
  const {setLoading} = React.useContext(LoaderContext);
  const {showAlert} = React.useContext(AlertContext);

  const { id, image, title, price } = product;

  const handleClick = () => {
    setLoading(true);
    router.push(`/products/${id}`);
    setLoading(false);
  };

  const handleAddToCart = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setLoading(true);
    setKey((prevKey) => prevKey + 1);
    addToCart(product as Product);
    showAlert(true, "success", "Product added to cart", key);
    setTimeout(() => {
      showAlert(false, "success", "Product added to cart", key);
    }, 3000);
    setLoading(false);
  };

  return (
    <div
      className="w-72 bg-white shadow-md rounded-xl duration-500 cursor-pointer"
      onClick={handleClick}
    >
      <a>
        <Image
          src={image}
          alt="product_image"
          className="rounded-t-xl w-full h-72 object-contain lg:w-64 lg:h-64 mx-auto"
          width={300}
          height={300}
        />
        <div className="px-4 py-3 w-72">
          <p className="text-lg font-bold text-black truncate block capitalize">
            {title}
          </p>
          <div className="flex items-center">
            <p className="text-lg font-semibold text-black cursor-auto my-3">
              ${price}
            </p>
            <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                ${price + 100}
              </p>
            </del>
            <div
              className="ml-auto hover:bg-gray-200 rounded-full p-2 cursor-pointer"
              onClick={handleAddToCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-bag-plus"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
