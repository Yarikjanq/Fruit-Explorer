<template>
  <div class="fruit-list">
    <h1 class="fruit-list__title">Fruits</h1>
    <div class="fruit-list__content">
      <div v-if="productStore.loading" class="fruit-list__loading">
        loading...
      </div>
      <!-- <div
        v-else
        v-for="product in productStore.products"
        :key="product.id"
        class="fruit-list__item"
      >
        <FruitCard :fruit-card="product" />
      </div> -->
      <li v-for="fruit in fruits" :key="fruit.id">
        {{ fruit.name }}
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../stores/fruits";
import { onMounted, watch } from "vue";
import FruitCard from "../components/fruits/FruitCard.vue";
import { fetchFruitsByNutrition } from "../api/frut";
const loading = ref(true);
const fruits = ref([]);
const productStore = useProductStore();

onMounted(async () => {
  try {
    // Запит до API для отримання фруктів
    const data = await fetchFruitsByNutrition("fat", 10, 100); // Приклад для calories з діапазоном від 0 до 1000
    fruits.value = data;
    loading.value = false;
  } catch (error) {
    loading.value = false;
    console.error("Failed to load fruits:", error);
  }
  productStore.fetchProducts();
});
</script>
