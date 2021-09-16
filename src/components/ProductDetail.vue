<template>
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

    <b-button class="view-btn" size="sm" href="#" variant="primary"
      >View More</b-button
    >
  </b-card>
</template>

<script>
import blue_socks from "@/assets/images/socks_blue.jpg";

export default {
  name: "ProductDetail",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      image: blue_socks,
    };
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
