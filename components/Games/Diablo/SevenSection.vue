<script setup lang="ts">
import {content} from "~/lib/constants";
</script>

<template>
  <div class="content-wrapper h-100 mt-10">
    <div class="second-section-content-wrapper w-100 h-100">
      <div class="testimonials-wrapper d-flex flex-column pt-16">
        <h1 class="title-section diablo-font text-center title-text mb-8">Testimonials</h1>
        <p class="description-text text-center">Rated
          <span :style="{color: content.firstPage.rating.color}">{{content.firstPage.rating.score}}</span> out of
          <span :style="{color: content.firstPage.rating.color}">5</span>
          based on <span :style="{color: content.firstPage.rating.color}">{{ content.firstPage.rating.reviews }}</span>
        </p>
        <nuxt-img class="mx-auto" src="/img/diablo/trustpilot.webp" width="130"></nuxt-img>
      </div>
      <div class="slider-wrapper d-flex align-center justify-center h-100">
        <LazyGamesDiabloVideoSwiper class="main__swiper"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/mixins';
@import '@/assets/games';

.content-wrapper {
  @include base-first-section('/img/diablo/seven-section-background.jpeg');
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
    align-items: start;
    flex-direction: row;
  }
}

.title-section {
  @extend .base-title-section;
}

</style>
