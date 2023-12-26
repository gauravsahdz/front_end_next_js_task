import React, { useEffect } from "react";
import useProductStore from "@/reducers/useProductStore";

const FilterBox = () => {
  const { categories, getAllCategories } = useProductStore();

  useEffect(() => {
    const fetchCategories = async () => {
      await getAllCategories();
    };
    fetchCategories();
  }, [getAllCategories]);

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-2">Filter By</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Categories
        </label>
        <select className="w-full border border-gray-300 rounded-md py-2 px-3">
          {categories?.map((category: any, index: number) => (
            <option key={index} value={category.id}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Sort By Price
        </label>
        <select className="w-full border border-gray-300 rounded-md py-2 px-3">
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBox;
