<script setup lang="ts">
  const images = [
    "/messanger.png",
    "/instagram.png",
    "/whatsapp.png",
  ]
</script>

<template>
  <v-sheet max-width="536" class="d-flex bg-transparent ga-2 justify-center justify-sm-space-between w-100 flex-wrap">
    <v-sheet v-for="image in images" :key="image" width="162" height="102" class="image-container bg-transparent d-flex justify-center align-center">
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
}
</style>