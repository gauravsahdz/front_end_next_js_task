import { Product } from "@/types/product";
import { getProducts } from "./api/product";

export default async function sitemap() {
  const baseUrl = "https://online-store-gauravsahdz.vercel.app";

  const prodcuts = await getProducts();
  const productsUrls = prodcuts.map((product: Product) => {
    return {
      url: `${baseUrl}/product/${product.id}`,
      lastModified: new Date().toISOString(),
    };
  }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
    },
    ...productsUrls,
  ];
}
