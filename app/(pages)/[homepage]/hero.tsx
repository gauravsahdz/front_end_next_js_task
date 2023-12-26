import { LoaderContext } from "@/context/LoaderProvider";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = (product: Product) => {
  const router = useRouter();
  const { setLoading } = React.useContext(LoaderContext);

  const handleClick = () => {
    setLoading(true);
    router.push(`/products/${product?.id}`);
  };

  return (
    <div
      className="flex flex-col-reverse w-full border-b-2 cursor-pointer border-gray-200 lg:flex-row lg:justify-between lg:items-center lg:px-20 lg:py-10 lg:w-9/12 mx-auto"
      onClick={handleClick}
    >
      <div className="flex flex-col justify-end align-center w-9/12 p-8 mx-auto">
        <h1 className="font-bold mb-2 lg:text-3xl md:text-2xl text-xl truncate block capitalize">
          {product?.title}
        </h1>
        <p className="text-gray-600 mb-4 truncate block capitalize">
          {product?.description}
        </p>

        <p className="text-green-500 font-bold text-2xl">
          <span className="text-gray-600 text-3xl mb-2">Offer</span> $
          {product?.price}{" "}
          <span className="text-gray-600 line-through text-sm">
            ${product?.price + 100}
          </span>
        </p>

        <button
          className="bg-black text-white px-4 py-2 rounded-md mt-4 w-32 lg:w-40 hover:bg-white hover:text-black transition duration-500 border border-black"
          onClick={handleClick}
        >
          Buy Now
        </button>
      </div>
      <div className="flex justify-center mx-auto">
        <img
          src={product?.image}
          alt="carousel image"
          className="rounded-t-xl object-contain mt-4 lg:mt-0 w-96 h-52 lg:w-full lg:h-72"
        />
      </div>
    </div>
  );
};

export default Hero;
