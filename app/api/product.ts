import axios from "axios";

// Get all products
async function getAllProducts() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.error("Error retrieving products:", error);
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
    console.error(`Error retrieving product with ID ${productId}:`, error);
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
    console.error(`Error retrieving categories:`, error);
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
    console.error(`Error retrieving products in category ${category}:`, error);
    throw error;
  }
}

export { getAllProducts, getProductById, getCategories, getProductsByCategory };
