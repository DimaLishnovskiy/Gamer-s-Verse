<script setup lang="ts">
import  {story} from "~/lib/constants";

const textYellowStyles = "custom-yellow text-title title";

const { mobile } = useDisplay();
</script>

<template>
  <h2 class="text-uppercase title font-weight-bold text-white mb-13 mb-sm-15 fs-40">our <span class="text-img">story</span></h2>
  <div class="story__bg">
    <div v-if="mobile" class="story__mask d-flex align-center px-8 pt-6 w-100">
      <nuxt-img class="mr-4" width="80" height="80" src="/about/mask.png"></nuxt-img>
      <div class="w-100">
        <p :class="textYellowStyles" class="fs-18">From The Desk Of Mantas,</p>
        <p :class="textYellowStyles" class="fs-18">Founder of Ball Hard’s Den</p>
      </div>
    </div>
    <div class="story__story d-flex justify-space-between align-center ga-8 ga-sm-16" v-for="(story, key) in story" :class="(key % 2) !== 0  ? 'flex-column flex-lg-row-reverse' : 'flex-column flex-lg-row'">
      <img class="order-2 w-100 w-lg-auto" :src="story.img">
      <v-sheet class="bg-transparent" :max-width="!mobile ? 350 : '100%'">
        <p :class="textYellowStyles" class="fs-18 font-weight-regular text-center text-lg-left">{{ story.text }}</p>
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
