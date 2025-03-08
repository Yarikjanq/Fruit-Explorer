<template>
  <div>
    <h1>Fruits</h1>

    <div v-for="product in productStore.products" :key="product.id">
      <div>
        {{ product }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../stores/fruits";
import { onMounted } from "vue";

const productStore = useProductStore();

onMounted(() => {
  productStore.fetchProducts();
});
</script>
