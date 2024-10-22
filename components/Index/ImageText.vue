<script setup lang="ts">
const imgText = [
  {
    title: "<span class='d-block'>Live Out Your</span> hero’s journey",
    img: "/index/first.png",
    text: "<span class='d-block mb-6'>Take over the gaming world by storm.</span> <span class='d-block mb-6'>Leave your friends speechless when they see your atomic rate of growth.</span> <span class='d-block mb-6'>Enjoy people marveling at your silky-smooth moves and unprecedented prowess to LEAD and WIN.</span> KO NOOBS like Prime Iron Mike."
  },
  {
    title: "<span class='d-block'>Dominate & Conquer The</span> Gaming World",
    img: "/index/second.png",
    text: "<span class='d-block mb-10'>Take a deep breath and imagine you are prime Mike Tyson completely annihilating your opponents.</span> Go against social conventions of being average …compliant …and pleasant."
  },
  {
    title: "<span class='d-block'>With great power comes</span> great responsibility.",
    img: "/index/third.png",
    text: "<span class='d-block mb-10'>If you can handle it, get in touch with Ball Hard, he will hook you up with ALL the tools you need to become a HERO.</span> The rest will be up to you."
  },
];
</script>

<template>
  <v-container class="py-0" max-width="1123">
    <div class="d-flex flex-column">
      <div class="main__images-texts d-flex justify-center align-center flex-column ga-10">
        <div v-for="(item, key) in imgText" :key='key' class="d-flex flex-column align-center w-100">
          <h3 class="fs-36 font-weight-bold title text-white text-center mb-11 text-uppercase" v-html="item.title"></h3>
          <nuxt-img width="80" class="mb-8" src="/index/divider.png"></nuxt-img>
          <div class="d-flex justify-space-between align-center w-100" :class="(key % 2) !== 0  ? 'flex-column flex-lg-row-reverse' : 'flex-column flex-lg-row' ">
            <img :src="item.img">
            <v-sheet class="bg-transparent" max-width="440">
              <p class="custom-yellow font-weight-regular title fs-18 text-uppercase" v-html="item.text"></p>
            </v-sheet>
          </div>
        </div>
      </div>
      <v-btn class="align-self-center" height="64">Explore all games</v-btn>
    </div>
  </v-container>
</template>

<style lang="scss">
.main {
  &__info-cards {
    margin-bottom: 180px;
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