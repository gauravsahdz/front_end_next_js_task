// useProductStore.ts
import create from 'zustand';
import { Product } from '@/types/product';

interface ProductStore {
  products: any[];
  singleProduct: Product | null;
  limitedProducts: any[];
  sortedProducts: any[];
  categories: string[];
  categoryProducts: any[];

  getAllProducts: () => Promise<void>;
  getSingleProduct: (productId: number) => Promise<void>;
  getLimitedProducts: (limit: number) => Promise<void>;
  getSortedProducts: (sort: string) => Promise<void>;
  getAllCategories: () => Promise<void>;
  getCategoryProducts: (category: string) => Promise<void>;
}

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  singleProduct: null,
  limitedProducts: [],
  sortedProducts: [],
  categories: [],
  categoryProducts: [],

  // Reducers for different API calls
  getAllProducts: async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    set({ products });
  },

  getSingleProduct: async (productId) => {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const singleProduct = await response.json();
    set({ singleProduct });
  },

  getLimitedProducts: async (limit) => {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    const limitedProducts = await response.json();
    set({ limitedProducts });
  },

  getSortedProducts: async (sort) => {
    const response = await fetch(`https://fakestoreapi.com/products?sort=${sort}`);
    const sortedProducts = await response.json();
    set({ sortedProducts });
  },

  getAllCategories: async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const categories = await response.json();
    set({ categories });
  },

  getCategoryProducts: async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const categoryProducts = await response.json();
    set({ categoryProducts });
  },
}));

export default useProductStore;
