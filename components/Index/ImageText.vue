<script setup lang="ts">
import { useDisplay } from "vuetify";

const display = ref(useDisplay());
const imgText = computed(() => {
  return [
    {
      title: "<span class='d-block'>Live Out Your</span> <span class='text-img'>hero’s journey</span>",
      img: `${display.value.smAndUp ? '/index/first.png' : '/index/first_mobile.png' }`,
      text: "<span class='d-block mb-6'>Take over the gaming world by storm.</span> <span class='d-block mb-6'>Leave your friends speechless when they see your atomic rate of growth.</span> <span class='d-block mb-6'>Enjoy people marveling at your silky-smooth moves and unprecedented prowess to LEAD and WIN.</span> KO NOOBS like Prime Iron Mike."
    },
    {
      title: "<span class='d-block'><span class='text-img'>Dominate</span> & Conquer The</span> Gaming World",
      img: `${display.value.smAndUp ? '/index/second.png' : '/index/second_mobile.png' }`,
      text: "<span class='d-block mb-10'>Take a deep breath and imagine you are prime Mike Tyson completely annihilating your opponents.</span> Go against social conventions of being average …compliant …and pleasant."
    },
    {
      title: "<span class='d-block'>With great <span class='text-img'>power</span> comes</span> <span class='text-img'>great</span> responsibility.",
      img: `${display.value.smAndUp ? '/index/third.png' : '/index/third_mobile.png' }`,
      text: "<span class='d-block mb-10'>If you can handle it, get in touch with Ball Hard, he will hook you up with ALL the tools you need to become a HERO.</span> The rest will be up to you."
    },
  ];
});

</script>

<template>
  <v-container class="py-0 px-5" max-width="1123">
    <div class="d-flex flex-column">
      <div class="main__images-texts d-flex justify-center align-center flex-column">
        <div v-for="(item, key) in imgText" :key='key' class="d-flex flex-column align-center w-100">
          <h3 class="fs-36 font-weight-bold title text-white text-center mb-4 mb-lg-11 text-uppercase" v-html="item.title"></h3>
          <nuxt-img width="80" class="mb-6 mb-lg-8" src="/index/divider.png"></nuxt-img>
          <div class="d-flex justify-space-between align-center w-100 ga-6 ga-lg-0 mb-15 mb-lg-0" :class="(key % 2) !== 0  ? 'flex-column flex-lg-row-reverse' : 'flex-column flex-lg-row' ">
            <NuxtImg format="webp" :src="item.img" :width="570" quality="70" style="max-width: 570px; width: 100%;" />
            <v-sheet class="bg-transparent" max-width="440">
              <p class="custom-yellow font-weight-regular text-center text-lg-left title fs-18 text-uppercase" v-html="item.text"></p>
            </v-sheet>
          </div>
        </div>
      </div>
      <div class="d-flex justify-center">
        <button @click="navigateTo('/games')" class="gold-button" :style="display.xs ? 'width: 256px' : 'width: 278px'">
          Explore all games
        </button>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss">
.main {
  &__images-texts {
    margin-bottom: 109px;
    gap: 100px !important;

    @media(max-width: 1200px) {
      margin-bottom: 40px;
      gap: 24px !important;
    }
  }

  &__info-cards {
    margin-bottom: 180px;

    @media(max-width: 1200px) {
      margin-bottom: 62px;
    }
  }

  &__info-card {
    background-image: url('/noise.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }
}
</style>