<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col cols="4" md="4" v-for="product in products" :key="product.id">
        <ProductDetail :product="product" />
      </b-col>
    </b-row>
  </b-container>
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
