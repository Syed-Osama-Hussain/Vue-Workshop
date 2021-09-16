<template>
  <div>
    <h3>Featured Products</h3>
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          cols="4"
          md="4"
          v-for="product in featuredProducts"
          :key="product.id"
        >
          <ProductDetail :product="product" />
        </b-col>
      </b-row>
    </b-container>
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

<style scoped>
h3 {
  font-size: 18.72px;
  text-align: center;
}
</style>
