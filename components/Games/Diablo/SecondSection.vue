<script setup lang="ts">
import ButtonQuote from "@/components/Games/Diablo/ButtonQuote.vue";
</script>

<template>
  <div class="content-wrapper h-100 mt-10">
    <div class="section-content-wrapper h-100">
      <h1 class="title-section title-text">We Help Busy Real Life Hustlers WIN Online</h1>
      <div class="d-flex flex-column w-100 lg:w-50">
        <p class="description-text mt-4">While you chase your dreams offline professional gamers fulfill your wildest wishes online.</p>
        <p class="description-text mt-4">If you want to win in real life, you have to work hard, <br> which means you will never have enough time to win and dominate online.</p>
        <p class="description-text mt-4">With Ball Hard’s Den you can win in both worlds!</p>
        <p class="warning-text mt-4">Now, tell us about your wildest gaming dreams and we will make them come true!</p>
        <ButtonQuote class="mt-4 ml-auto mr-auto" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/mixins';
@import '@/assets/games';

.content-wrapper {
  @include base-first-section('/img/diablo/second-section-background.webp');
}

.section-content-wrapper {
  @extend .base-content-wrapper;
}

.title-section {
 @extend .base-title-section;
}
</style>
