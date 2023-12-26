export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number;
}

export interface Products {
  products: Product[];
  singleProduct: Product | null;
  limitedProducts: Product[];
  sortedProducts: Product[];
  categoryProducts: Product[];
}
