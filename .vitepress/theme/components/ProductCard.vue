<template>
  <div class="product-card">
    <a :href="link">
      <img :src="img" :alt="name" width="300" />
      <div class="name">{{ name }}</div>
    </a>
  </div>
</template>
<script setup>
defineProps({
  img: String,
  name: String,
  link: String
})
</script>
<style scoped>
.product-card {
  text-align: center;
  margin: 16px;
  display: inline-block;
}
.name {
  margin-top: 8px;
  font-weight: bold;
}
</style>
