<script setup></script>

<template>
  <div class="nav">
    <router-link class="router-link" :to="{ name: 'Home' }">Home</router-link>
    <router-link class="router-link" :to="{ name: 'About' }">About</router-link>
  </div>
  <router-view></router-view>
</template>

<style lang="postcss">
@import url("@/index.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
