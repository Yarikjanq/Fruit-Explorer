<template>
  <div>
    <div v-for="product in productCount">
      <ul class="fruit-card__nutritions">
        <li class="fruit-card__names">
          <strong>calories: </strong> {{ product.nutritions?.calories }}
        </li>
        <li class="fruit-card__names">
          <strong> carbohydrates: </strong>
          {{ product.nutritions?.carbohydrates }}
        </li>
        <li class="fruit-card__names">
          <strong>fat:</strong> {{ product.nutritions?.fat }}
        </li>
        <li class="fruit-card__names">
          <strong>protein:</strong> {{ product.nutritions?.protein }}
        </li>
        <li class="fruit-card__names">
          <strong>sugar:</strong> {{ product.nutritions?.sugar }}
        </li>
      </ul>
      <button @click="toggleFavourite(product)">Remove from favourite</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Fruit } from "~/types/fruits";
import { useSaveProduct } from "../stores/savedFruits";
import FruitCard from "~/components/fruits/FruitCard.vue";
const savedProduct = useSaveProduct();

const productCount = computed(() => savedProduct.savedFruits);
const deleteFruits = useSaveProduct();

const toggleFavourite = (fruit: Fruit) => {
  deleteFruits.toggleFavorite(fruit);
};
</script>
