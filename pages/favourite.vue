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
      <button
        :class="
          deleteProduct(product)
            ? 'fruit-card__btn--active fruit-card__btn'
            : 'fruit-card__btn'
        "
        @click="deleteProduct(product)"
      >
        {{
          deleteProduct(product) ? "Remove from favourite" : "Add to favourite"
        }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Fruit } from "~/types/fruits";
import { useSaveProduct } from "../stores/savedFruits";
import FruitCard from "~/components/fruits/FruitCard.vue";
const savedProduct = useSaveProduct();

const productCount = computed(() => savedProduct.savedFruits);
const savedFruitssss = useSaveProduct();

const deleteProduct = (fruit: Fruit) => {
  const savedFruits = JSON.parse(localStorage.getItem("fruits") || "[]");
  return savedFruits.filter((item: Fruit) => item.id === fruit.id);
};
</script>
