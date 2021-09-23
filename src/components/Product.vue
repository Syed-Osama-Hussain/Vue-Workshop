<template>
  <b-container>
    <b-row>
      <b-col cols="6">
        <b-card
          :title="product.name"
          :img-src="image"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-card-text class="category-text">
            Category: {{ product.category }}
          </b-card-text>
          <b-card-text class="category-text">
            Price: ${{ product.price }}
          </b-card-text>
          <b-card-text class="category-text">
            Description: {{ product.description }}
          </b-card-text>

          <b-button
            v-if="isItemInCart(product.id)"
            @click="removeFromCart"
            class="view-btn"
            size="sm"
            href="#"
            variant="danger"
            >Remove</b-button
          >
          <b-button
            v-else
            @click="addToCart"
            class="view-btn"
            size="sm"
            href="#"
            variant="success"
            >Add</b-button
          >
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import device from "@/assets/images/mobile.jpg";
import { getProductById } from "@/services/productService";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Product",
  created() {
    this.getProduct();
  },
  watch: {
    "$route.params.id": function () {
      this.getProduct();
    },
  },
  data() {
    return {
      image: device,
      product: {},
    };
  },
  methods: {
    ...mapActions(["addItem", "removeItem"]),
    addToCart() {
      this.addItem(this.product);
    },
    removeFromCart() {
      this.removeItem(this.product.id);
    },
    getProduct() {
      this.product = getProductById(this.$route.params.id);
    },
  },
  computed: {
    ...mapGetters(["isItemInCart"]),
  },
};
</script>

<style scoped>
img {
  height: 80px;
}

p {
  font-size: 12px;
}

h4 {
  font-size: 16px;
}

.view-btn {
  width: 47.5px;
  height: 17px;
  font-size: 6px;
  margin-right: 5px;
}

.card-body {
  padding: 12px;
}

.card-title {
  margin-bottom: 0.1rem;
}

.category-text {
  margin-bottom: 0px;
}
</style>
