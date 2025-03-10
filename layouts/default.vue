<template>
  <div class="layout">
    <header class="layout__header">
      <nav class="layout__nav">
        <NuxtLink class="layout__link" to="/">Головна</NuxtLink>
        <NuxtLink class="layout__link" to="/family"> Family</NuxtLink>
        <div class="layout__saved">
          <span v-if="productCount > 0"> {{ productCount }}</span>
          <NuxtLink class="layout__link" to="/favourite"> Favourite </NuxtLink>
        </div>
        <NuxtLink class="layout__link layout__link--active" to="/about"
          >Про нас</NuxtLink
        >
      </nav>
    </header>

    <main class="layout__content">
      <slot />
    </main>

    <footer class="layout__footer">
      <p class="layout__copyright">© 2025 Мій сайт</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useSaveProduct } from "../stores/savedFruits";

const savedProduct = useSaveProduct();

const productCount = computed(() => savedProduct.savedFruits.length);
</script>

<style scoped></style>
