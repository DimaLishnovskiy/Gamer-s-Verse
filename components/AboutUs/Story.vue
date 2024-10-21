<script setup lang="ts">
const textYellowStyles = "custom-yellow text-title title";

const { mobile } = useDisplay();
const data = [
  {
    img: "/story_1.png",
    text: "Late 2019. Humble beginnings. I hired one guy to powerlevel Runescape accounts while I worked day and night to bring business in."
  },
  {
    img: "/story_2.png",
    text: "By the end 2019 we grew into a 3-man team. There was not enough room for me in our little attic-office, so I had to work from home. :("
  },
  {
    img: "/story_3.png",
    text: "Nine months later we rented a bigger place."
  },
  {
    img: "/story_4.png",
    text: "Finally had my own little corner to work at :) We weathered many ups and downs in this place. Almost went out of business. But we never stopped and in 2023 we finally moved up, again."
  },
  {
    img: "/story_5.png",
    text: "Ball Hard’s Den Version 3 babe! "
  },

];
</script>

<template>
  <h2 class="text-uppercase title font-weight-bold text-white mb-15" :class="mobile ? 'fs-24': 'fs-40'">our story</h2>
  <div class="story__bg">
    <div v-if="mobile" class="story__mask d-flex align-center px-8 pt-6 w-100">
      <nuxt-img class="mr-4" width="80" height="80" src="/about/mask.png"></nuxt-img>
      <div class="w-100">
        <p :class="textYellowStyles">From The Desk Of Mantas,</p>
        <p :class="textYellowStyles">Founder of Ball Hard’s Den</p>
      </div>
    </div>
    <div class="story__story d-flex justify-space-between align-center ga-16" v-for="(story, key) in data" :class="(key % 2) !== 0  ? 'flex-column flex-lg-row-reverse' : 'flex-column flex-lg-row' ">
      <img class="order-2 w-100 w-lg-auto" :src="story.img">
      <v-sheet class="bg-transparent" :max-width="!mobile ? 350 : '100%'">
        <p :class="textYellowStyles" class="fs-18 font-weight-regular">{{ story.text }}</p>
      </v-sheet>
    </div>
  </div>
</template>

<style lang="scss">
.story {

  &__mask {
    margin-bottom: 56px;
  }

  &__story {
    padding: 74px 64px;

    @media(max-width: 1200px) {
      padding: 32px 9px;
    }
  }

  &__bg {
    background-image: url("/story_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    max-width: 1068px;
    height: auto;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}
</style>