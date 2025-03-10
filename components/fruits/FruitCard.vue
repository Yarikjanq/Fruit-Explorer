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
    <button
      :class="
        isFavourite(props.fruitCard)
          ? 'fruit-card__btn--active fruit-card__btn'
          : 'fruit-card__btn'
      "
      @click="addToFavourite"
    >
      {{
        isFavourite(props.fruitCard)
          ? "Remove from favourite"
          : "Add to favourite"
      }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Fruit } from "~/types/fruits";
import { useSaveProduct } from "../../stores/savedFruits";
const props = defineProps<{
  fruitCard: Fruit;
}>();

const emit = defineEmits<{
  (event: "add-to-favourite", fruit: Fruit): void;
}>();

const addToFavourite = () => {
  emit("add-to-favourite", props.fruitCard);
};

const savedFruits = useSaveProduct();

const isFavourite = (fruit: Fruit) => {
  return savedFruits.savedFruits.some((item: Fruit) => item.id === fruit.id);
};
</script>
