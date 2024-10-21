<script setup lang="ts">
const { mobile } = useDisplay();
const menuLeft = [
  {
    name: "Home",
    to: "/"
  },
  {
    name: "Games",
    to: "/games"
  }
];

const menuRight = [
  {
    name: "contact us",
    to: "/contact-us"
  },
  {
    name: "About us",
    to: "/about-us"
  },
  {
    name: "Opt in",
    to: "/opt-in"
  }
];
</script>

<template>
  <header>
    <template v-if="!mobile">
      <div class="d-flex justify-center">
        <v-sheet fluid width="100%" max-width="944" class="bg-transparent">
          <v-row no-gutters>
            <v-col cols="12">
              <div class="d-flex align-center justify-space-between">
                <div class="d-flex ga-10">
                  <nuxt-link :to="item.to" class="text-uppercase text-decoration-none custom-white text" v-for="item in menuLeft">{{ item.name }}</nuxt-link>
                </div>
                <nuxt-img src="/logo_text.svg" :width="mobile ? 134 : 289" class="mx-10"></nuxt-img>
                <div class="d-flex ga-10">
                  <nuxt-link :to="item.to" class="text-uppercase text-decoration-none custom-white" v-for="item in menuRight">{{ item.name }}</nuxt-link>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </div>
    </template>
    <template v-if="mobile">
      <div class="d-flex justify-center">
        <img :width="mobile ? 134 : 289" src="/logo_text.svg">
      </div>
    </template>
  </header>
</template>

<style scoped lang="scss">

</style>