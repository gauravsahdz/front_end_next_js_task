import axios from "axios";

// Get all products
async function getProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Get a specific product by ID
async function getProductById(productId: number) {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Get all categories
async function getCategories() {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/categories`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Get all products in a specific category
async function getProductsByCategory(category: string) {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export { getProducts, getProductById, getCategories, getProductsByCategory };
