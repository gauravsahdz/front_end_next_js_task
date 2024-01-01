import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useProductStore from "@/reducers/useProductStore";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import { LoaderContext } from "@/context/LoaderProvider";
import { AlertContext } from "@/context/AlertProvider";
import { getProducts } from "@/app/api/product";

export async function generateMetadata({
  params,
}: {
  params: {
    searchTerm: string;
  };
}) {
  return {
    title: `${params.searchTerm}`,
    description: `Search results for ${params.searchTerm}`,
    alternates: {
      canonical: `/search/${params.searchTerm}`,
    },
  };
}

export async function generateStaticParams() {
  const products = await getProducts();

  if (!products) return [];

  return products.map((product: Product) => ({
    searchTerm: product.title.toLowerCase(),
  }));
}

const page = async ({
  params: { searchTerm },
}: {
  params: {
    searchTerm: string;
  };
}) => {
  const products = await getProducts();

  if (!products) return [];

  const filteredProducts = products.filter((product: Product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="flex flex-row h-full">
      <div className="container mx-auto p-4">
        <p>
          Showing {filteredProducts.length} results for {searchTerm}:
        </p>
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
          {filteredProducts && filteredProducts.length > 0 ? (
            filteredProducts?.map((product: any, index: number) => (
              <ProductCard key={index} {...product} />
            ))
          ) : (
            <p className="text-center text-gray-500">No products found</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default page;
