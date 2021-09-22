<template>
  <b-container>
    <b-row>
      <b-col cols="6">
        <div v-if="totalItems === 0"><p>The cart is empty</p></div>
        <b-card
          v-for="item in cart"
          :key="item.id"
          :title="item.name"
          tag="article"
          style="max-width: 20rem"
          class="mb-2"
        >
          <b-button
            @click="removeFromCart(item.id)"
            class="view-btn"
            size="sm"
            href="#"
            variant="danger"
            >Remove</b-button
          >
          <br />
          <p>Price ${{ item.price }}</p>
        </b-card>
      </b-col>
      <b-col cols="6">
        <div>
          <h4>Total Items: {{ totalItems }}</h4>
        </div>
        <div>
          <h4>Sub Total: ${{ totalPrice }}</h4>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "Cart",
  methods: {
    ...mapActions(["removeItem"]),
    removeFromCart(id) {
      this.removeItem(id);
    },
  },
  computed: {
    ...mapGetters(["totalItems"]),
    ...mapState(["cart"]),
    totalPrice() {
      return this.cart.reduce(
        (partial_sum, item) => partial_sum + item.price,
        0
      );
    },
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
  float: right;
}

.card {
  width: 150px;
  height: 70px;
}

.card-body {
  padding: 12px;
}

.card-title {
  margin-bottom: 0.1rem;
  display: inline;
}

.category-text {
  margin-bottom: 0px;
}
</style>
