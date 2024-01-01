// useProductStore.ts
import create from "zustand";
import { Product } from "@/types/product";
import {
  getProducts,
  getCategories,
  getProductById,
  getProductsByCategory,
} from "@/app/api/product";

interface ProductStore {
  products: any[];
  singleProduct: Product | null;
  categories: string[];
  categoryProducts: any[];

  getAllProducts: () => Promise<Product[]>;
  getSingleProduct: (productId: number) => Promise<Product>;
  getAllCategories: () => Promise<string[]>;
  getCategoryProducts: (category: string) => Promise<Product[]>;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  singleProduct: null,
  categories: [],
  categoryProducts: [],

  // Reducers for different API calls
  getAllProducts: async () => {
    const products = await getProducts();
    set({ products });
    return products;
  },

  getSingleProduct: async (productId) => {
    const singleProduct = await getProductById(productId);
    set({ singleProduct });
    return singleProduct;
  },

  getAllCategories: async () => {
    const categories = await getCategories();
    set({ categories });
    return categories;
  },

  getCategoryProducts: async (category) => {
    const categoryProducts = await getProductsByCategory(category);
    set({ categoryProducts });
    return categoryProducts;
  },
}));

export { useProductStore };
