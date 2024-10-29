<script setup lang="ts">
const images = [
  { icon: "/messenger_img.png", name: "Messenger", to: "https://m.me/gamingtheballhardsway?ref=w26367461" },
  { icon: "/instagram_img.png", name: "Instagram", to: "https://instagram.com/p/CsBeAvit0V3/" },
  { icon: "/trustpilot_img.png", name: "Trustpilot", to: "https://www.trustpilot.com/review/ballhardsden.com" },
];

  const display = ref(useDisplay())
</script>

<template>
  <v-sheet max-width="536" class="d-flex bg-transparent ga-2 justify-center justify-sm-space-between w-100 flex-wrap">
    <v-sheet v-for="image in images" :width="display.smAndUp ? 162 : 142" :height="display.smAndUp ? 102 : 92" class="image-container bg-transparent d-flex justify-center align-center">
      <nuxt-link :href="image.to" class="text-decoration-none w-100 h-100 d-flex justify-center bg-transparent flex-column align-center" target="_blank">
        <nuxt-img width="24" height="24" :src="image.icon" class="mb-3"></nuxt-img>
        <span class="text-img title font-weight-regular text-uppercase text-center" :class="display.xs ? 'fs-14' : 'fs-16'">{{ image.name }}</span>
      </nuxt-link>
    </v-sheet>
  </v-sheet>
</template>

<style scoped lang="scss">
.image-container {
  background-image: url('/noise.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: border 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    border: 1px solid #FAE97E;
  }
}
</style>