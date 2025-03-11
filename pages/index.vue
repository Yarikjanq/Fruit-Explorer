<template>
  <div class="fruit-list">
    <div class="layout__filters">
      <div class="layout__select">
        <select
          class="layout__select--nutrion"
          v-model="nutrion"
          @change="applyFilter"
        >
          <option
            class="layout__select--option"
            v-for="option in selectedNutritions"
            :key="option"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
      <div>
        <div class="layout__range">
          <label> Min: {{ min }}</label>
          <input
            @change="applyFilter"
            v-model="min"
            type="range"
            :min="0"
            :max="100"
          />
        </div>
        <div class="layout__range">
          <label>Max: {{ max }}</label>
          <input
            @change="applyFilter"
            v-model="max"
            type="range"
            :min="0"
            :max="100"
          />
        </div>
      </div>
    </div>
    <h1 class="fruit-list__title">Fruits</h1>
    <div class="fruit-list__content">
      <div v-if="productStore.loading" class="fruit-list__loading">
        loading...
      </div>
      <div
        v-else
        v-for="product in productStore.filteredProducts"
        :key="product.id"
        class="fruit-list__item"
      >
        <div v-if="productStore.filteredProducts.length > 0">
          <FruitCard
            @add-family="handleAddToFamily"
            @add-to-favourite="handleAddToFavourite"
            :fruit-card="product"
          />
        </div>
        <div v-else>
          <p>Тема</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from "../stores/fruits";
import { useSaveProduct } from "../stores/savedFruits";
import { useSaveFamily } from "../stores/family";
import { onMounted, watch } from "vue";
import FruitCard from "../components/fruits/FruitCard.vue";
import type { Fruit } from "~/types/fruits";

const min = ref(0);
const max = ref(100);
const nutrion = ref("calories");
const selectedNutritions = ref([
  "calories",
  "carbohydrates",
  "fat",
  "protein",
  "sugar",
]);

const router = useRouter();
const productStore = useProductStore();
const saveStoreForProduct = useSaveProduct();
const getFruitFamily = useSaveFamily();
const applyFilter = () => {
  productStore.filterProducts(nutrion.value, min.value, max.value);
};

const handleAddToFamily = (family: string) => {
  getFruitFamily.loadSaveFamily(family);
  router.push(`/family`);
};
const handleAddToFavourite = (fruit: any) => {
  saveStoreForProduct.toggleFavorite(fruit);
};
onMounted(() => {
  productStore.fetchProducts();
});
</script>
<style scoped></style>
