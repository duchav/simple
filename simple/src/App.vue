<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <header class="container">
    <RouterLink :to="{ name: 'home' }">
      <p>Home</p>
    </RouterLink>
    <h2>HEADER</h2>
    <RouterLink :to="{ name: 'other' }">
      <a href="">Other Pages</a>
    </RouterLink>
  </header>
  <RouterView />
  <footer class="container">
    <h2>FOOTER</h2>
  </footer>
</template>

<style scoped>

header {
  height: var(--header-height);
  background-color: aquamarine;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 20px ;
}
footer {
  height: var(--footer-height);
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
</style>
