<script setup lang="ts">
import {content} from '@/lib/constants'
import {ButtonQuote} from "#components";
</script>

<template>
  <div class="first-section-wrapper h-100 mt-10">
    <div class="first-section-content-wrapper h-100">
      <nuxt-img class="mt-auto" src="/img/first-section-logo.webp" width="736" height="344"></nuxt-img>
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
.first-section-wrapper {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
      radial-gradient(circle at center, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 58%, rgba(0, 0, 0, 0.9) 100%),
      linear-gradient(180deg, rgb(0, 0, 0) 2%, rgba(0, 0, 0, 0.1) 50%, rgb(0, 0, 0) 95%),
      linear-gradient(90deg, rgba(255, 255, 255, 0.2) 5%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.2) 100%),
      url('/img/first-section-background.webp');
  background-size: cover;
  background-position: center;
}

.first-section-content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.title-section {
  color: white;
  text-align: center;
  font-size: 80px;
  font-weight: 500;
  text-shadow: #F32906 10px 0 25px;
}

.text-link {
  cursor: pointer;
  font-size: 24px;
  font-weight: 500;
  line-height: 72px;
  color: var(--text-color-title);
}
</style>
