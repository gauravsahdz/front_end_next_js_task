"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import useProductStore from "@/reducers/useProductStore";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";

const Page = () => {
  const { searchTerm } = useParams();
  const { products } = useProductStore();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  useEffect(() => {
    const filterProducts = async () => {
      const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(searchTerm)
      );
      setFilteredProducts(filtered);
    };

    filterProducts();
  }, [searchTerm, products]);

  return (
    <div className="flex-grow h-screen">
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

export default Page;
