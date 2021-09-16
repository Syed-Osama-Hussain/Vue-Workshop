<template>
  <div>
    <div v-for="product in products" :key="product.id">
      <ProductDetail :product="product" />
    </div>
  </div>
</template>

<script>
import { getProductsbyCategory } from "@/services/productService";
import ProductDetail from "@/components/ProductDetail";

export default {
  name: "ProductsPage",
  components: {
    ProductDetail,
  },
  watch: {
    "$route.params.category": function () {
      this.getProducts();
    },
  },
  created() {
    this.getProducts();
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      this.products = getProductsbyCategory(this.$route.params.category);
    },
  },
};
</script>
