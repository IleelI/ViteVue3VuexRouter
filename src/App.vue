<script setup></script>

<template>
  <div class="nav">
    <router-link class="router-link" :to="{ name: 'Home' }">Home</router-link>
    <router-link class="router-link" :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view></router-view>
</template>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active,
.router-link-exact-active {
  @apply text-teal-600 underline underline-offset-4 font-semibold font-sans !important;
}
</style>
