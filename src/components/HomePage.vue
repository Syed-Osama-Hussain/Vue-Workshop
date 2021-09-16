<template>
  <div>
    <h1>Featured Products</h1>
    <div v-for="product in featuredProducts" :key="product.id">
      <ProductDetail :product="product" />
    </div>
  </div>
</template>

<script>
import { getFeaturedProducts } from "@/services/productService";
2;
import ProductDetail from "@/components/ProductDetail";

export default {
  name: "HomePage",
  components: {
    ProductDetail,
  },
  created() {
    this.featuredProducts = getFeaturedProducts(this.$route.params.category);
  },
  data() {
    return {
      featuredProducts: [],
    };
  },
};
</script>
