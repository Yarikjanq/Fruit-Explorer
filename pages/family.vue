<template>
  <div>
    <div v-if="getFamilyProduct.loading">loading...</div>
    <div v-else v-for="family in getFamilyProduct.saveFamily" :key="family.id">
      <FruitCard
        :fruit-card="family"
        @add-to-favourite="handleAddToFavourite"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import FruitCard from "~/components/fruits/FruitCard.vue";
import { useSaveFamily } from "../stores/family";
import { useSaveProduct } from "../stores/savedFruits";

const getFamilyProduct = useSaveFamily();
const saveStoreForProduct = useSaveProduct();
const handleAddToFavourite = (fruit: any) => {
  saveStoreForProduct.toggleFavorite(fruit);
};
</script>
