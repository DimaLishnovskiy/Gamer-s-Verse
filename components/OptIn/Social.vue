<script setup lang="ts">
  const images = [
    "/messanger.png",
    "/instagram.png",
    "/whatsapp.png",
  ]

  const display = ref(useDisplay())
</script>

<template>
  <v-sheet max-width="536" class="d-flex bg-transparent ga-2 justify-center justify-sm-space-between w-100 flex-wrap">
    <v-sheet v-for="image in images" :key="image" :width="display.smAndUp ? 162 : 142" :height="display.smAndUp ? 102 : 92" class="image-container bg-transparent d-flex justify-center align-center">
      <div>
        <img :src="image">
      </div>
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