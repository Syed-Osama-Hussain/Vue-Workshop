<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" />
      </div>
      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <ul>
          <li>{{ product.category }}</li>
        </ul>
      </div>
    </div>
  </div>
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

<style>
h1 {
  font-size: 50px;
}

img {
  border: 2px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  padding: 15px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

li {
  font-size: 18px;
}

.product-display {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.product-image,
.product-info {
  width: 50%;
}

ul {
  list-style-type: none;
}
</style>
