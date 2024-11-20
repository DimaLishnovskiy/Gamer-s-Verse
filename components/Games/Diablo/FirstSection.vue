<script setup lang="ts">
import {content} from '@/lib/constants'
import ButtonQuote from "@/components/Games/Diablo/ButtonQuote.vue";
</script>

<template>
  <div class="section-wrapper h-100 mt-10">
    <div class="first-section-content-wrapper h-100">
      <nuxt-img class="mt-auto image-logo" src="/img/first-section-logo.webp" width="736" height="344"></nuxt-img>
      <h1 class="diablo-font title-section">
        {{ content.firstPage.title }}
      </h1>
      <p class="description-text">Rated
        <span :style="{color: content.firstPage.rating.color}">{{content.firstPage.rating.score}}</span> out of
        <span :style="{color: content.firstPage.rating.color}">5</span>
        based on <span :style="{color: content.firstPage.rating.color}">{{ content.firstPage.rating.reviews }}</span>
      </p>
      <nuxt-img src="/img/trustpilot.webp" width="130"></nuxt-img>
      <ButtonQuote class="mt-4" />
      <p class="diablo-font text-link d-flex align-center mt-auto">new to boosting? <Icon class="ml-4" name="mdi:arrow-down" /></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/mixins';
@import '@/assets/games';

.section-wrapper {
  @include base-first-section('/img/first-section-background.webp');
}

.first-section-content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.image-logo {
  @include between("xxs", "lg") {
    width: 386px;
    height: 182px;
  }
}

.title-section {
  color: white;
  text-align: center;
  font-size: 80px;
  font-weight: 500;
  text-shadow: #F32906 10px 0 25px;

  @include between("xxs", "lg") {
    font-size: 40px;
  }
}

.text-link {
  cursor: pointer;
  font-size: 24px;
  font-weight: 500;
  line-height: 72px;
  color: var(--text-color-title);
}
</style>
