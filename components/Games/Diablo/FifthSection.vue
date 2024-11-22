<script setup lang="ts">
import {diabloServicesList} from "~/lib/constants";
</script>

<template>
  <div class="content-wrapper h-100 mt-10">
    <div class="second-section-content-wrapper h-100 pt-16">
      <p class="description-text text-center w-100">Menu of</p>
      <h1 class="diablo-font title-text text-center w-100">Services</h1>

      <div class="items-wrapper mt-16">
        <div class="item d-flex align-center justify-center flex-column" v-for="item in diabloServicesList" :key="item.title">
          <p class="item-text text-capitalize text-center mb-auto lg:mb-0">{{item.title}}</p>
          <nuxt-img class="my-4" width="56" height="56" :src="item.icon"></nuxt-img>
          <p class="item-text item-text-description">{{item.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/mixins';
@import '@/assets/games';

.content-wrapper {
  padding: 0 60px;
  background:
      linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 10%, rgba(135, 20, 11, 0.25) 20%, rgba(135, 20, 11, 0) 70%, rgba(0, 0, 0, 0.8) 100%),
      radial-gradient(ellipse at center, rgba(0, 0, 0, 0.8) 70%, rgba(0, 0, 0, 0.7) 30%, rgba(135, 20, 11, 0.3) 58%, rgba(0, 0, 0, 0.8) 70%),
      linear-gradient(90deg, rgba(255, 255, 255, 0.2) 5%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.2) 100%),
      url("/img/diablo/fifth-section-background.jpeg");
}

.item-text-description {
  display: none;

  @include respond-to("lg") {
    display: inline-block;
  }
}

.items-wrapper {
  display: flex;
  flex-wrap: wrap;

  @include respond-to("lg") {
    display: grid;
    justify-items: center;
    grid-row-gap: 80px;
    grid-template-columns: repeat(4, 1fr);
  }

  .item {
    width: 50%;

    @include respond-to("lg") {
      width: 100%;
    }
  }

  & > .item:nth-last-child(1):nth-child(4n + 1) {
    margin: auto;

    @include respond-to("lg") {
      grid-column: span 4;
      justify-self: center;
    }
  }
}
</style>
