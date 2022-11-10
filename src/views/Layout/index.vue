<template>
  <page-header />
  <section class="pt-16 md:pt-20">
    <router-view />
  </section>
</template>
<script setup lang="ts">
  import PageHeader from '../../components/header.vue'
</script>

<style scoped></style>
