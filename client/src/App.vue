<script setup>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navigation />
  <router-view class="grow"></router-view>
  <Footer />
</template>

<style scoped></style>
