<script setup lang="ts">
  const {mobile} = useDisplay()
</script>

<template>
  <div class="game">
    <div class="d-flex flex-column flex-lg-row align-center justify-space-between align-end">
      <h1 class="text-white game__title text-uppercase title mb-6">Choose<br>Your Game</h1>
      <v-text-field  class="mb-16 mb-lg-0 w-100" style="max-height: 64px;" hide-details :max-width="mobile ? '100%' : 478" label="Prepend" prepend-inner-icon="mdi-map-marker" variant="outlined"></v-text-field>
    </div>
    <div class="d-flex align-start" v-if="!mobile">
      <nuxt-img class="mt-8 mr-1" height="151" src="/little_man.png"></nuxt-img>
      <v-sheet class="bg-transparent game__speech" max-width="304">
        <p class="px-2 py-4 text-uppercase text-white title fs-12 text-center">can’t find what you looking for? Contact us here</p>
      </v-sheet>
    </div>
  </div>
</template>

<style lang="scss">
  .game {
    &__title {
      font-size: 72px;
      line-height: 1;

      @media(max-width:1200px) {
        font-size: 32px;
      }
    }

    &__speech {
      border: 1px solid yellow;
    }
  }
</style>