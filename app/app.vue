<style>
:root {
  --menu-height: 98px;
  --app-max-width: 2440px;
}

body {
  font-family: "Poppins", sans-serif;
}

.rte h1 {
  font-size: 2.5rem;
}

.rte h2 {
  font-size: 2rem;
}

.rte h3 {
  font-size: 2rem;
}
</style>

<template>
  <div class="max-w-[--app-max-width] mx-auto">
    <app-nav></app-nav>
    <div class="relative z-0 bg-gray-100">
      <nuxt-page />
    </div>
    <app-footer></app-footer>
  </div>
</template>