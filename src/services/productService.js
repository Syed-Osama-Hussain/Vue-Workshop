import data from "../db.json";

export function getProductsbyCategory(category) {
  return data?.products?.filter((product) => product.category === category);
}

export function getProductById(id) {
  return data?.products?.find((product) => product.id === id);
}

export function getFeaturedProducts() {
  return data?.products?.filter((product) => product.featured);
}

export default {
  getProductsbyCategory,
  getProductById,
  getFeaturedProducts,
};
