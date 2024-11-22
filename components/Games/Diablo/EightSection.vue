<script setup lang="ts">
</script>

<template>
  <div class="content-wrapper h-100 mt-10">
    <div class="second-section-content-wrapper w-100 h-100">
      <h1 class="title-section diablo-font text-center title-text mb-8">Story</h1>
      <LazyGamesDiabloStorySwiper class="main__swiper"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/mixins';
@import '@/assets/games';

.content-wrapper {
  @include base-first-section('/img/diablo/eight-section-background.webp');
}

.testimonials-wrapper, .slider-wrapper {
  width: 100%;

  @include respond-to("lg") {
    width: 50%;
  }
}

.second-section-content-wrapper {
  display: flex;
  flex-direction: column;

  @include respond-to("lg") {
    align-items: center;
    justify-content: center;
  }
}

.title-section {
  @extend .base-title-section;
  margin-top: 70px;

  @include respond-to("lg") {
    margin-top: 0;
  }
}

</style>
