<script setup lang="ts">

</script>

<template>
  <footer class="foot">
    <v-row justify="center" no-gutters>
      <v-col cols="12">
        <v-sheet height="160" class="image-container bg-transparent d-flex justify-center w-100">
          <h1 class="text-white d-flex align-center justify-center flex-column">
            <img src="/logo.png" class="mb-6">
            <span class="custom-white fs-14 font-weight-thin">All rights  reserved @ 2023</span>
          </h1>
        </v-sheet>
      </v-col>
    </v-row>
  </footer>
</template>

<style scoped>

.image-container {
  background-image: url('/footer.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}
</style>