<template>
  <div class="layout">
    <header class="layout__header">
      <h1 class="layout__title">Це заголовок сайту</h1>
      <nav class="layout__nav">
        <NuxtLink class="layout__link" to="/">Головна</NuxtLink> |
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

<script setup></script>

<style scoped></style>
