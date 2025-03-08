<template>
  <div class="fruit-card">
    <h3 class="fruit-card__family">
      <strong>Family:</strong> {{ fruitCard.family }}
    </h3>
    <ul class="fruit-card__nutritions">
      <li class="fruit-card__names">
        <strong>calories: </strong> {{ fruitCard.nutritions?.calories }}
      </li>
      <li class="fruit-card__names">
        <strong> carbohydrates: </strong>
        {{ fruitCard.nutritions?.carbohydrates }}
      </li>
      <li class="fruit-card__names">
        <strong>fat:</strong> {{ fruitCard.nutritions?.fat }}
      </li>
      <li class="fruit-card__names">
        <strong>protein:</strong> {{ fruitCard.nutritions?.protein }}
      </li>
      <li class="fruit-card__names">
        <strong>sugar:</strong> {{ fruitCard.nutritions?.sugar }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Fruit } from "~/types/fruits";
const props = defineProps<{
  fruitCard: Fruit;
}>();

const card_nutritions = [
  {
    name: "",
  },
];
</script>
