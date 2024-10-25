<template>
  <div class="main">
    <Menu class="pt-4 pt-lg-10 main__menu"/>
    <nuxt-img class="main__city" :src="xs ? '/index/city_mobile_bg.svg' : '/index/city.svg'"></nuxt-img>

    <section class="main__top-block mb-12 mb-lg-15">
      <v-container :max-width="useCalcContainer(896)" class="py-0">
        <div class="d-flex justify-center flex-column align-center">
          <h1 class="fs-72 text-uppercase text-center text-white title mb-3">
            <span class="d-block"><span class="text-img">win</span> At Any Game</span>
            <span>You Play</span>
          </h1>
          <p class="fs-16 font-weight-medium title custom-yellow mb-2">7000+ happy clients</p>
          <nuxt-img class="mb-2" width="128" src="/index/stars.png"></nuxt-img>
          <nuxt-img class="main__trustpilot" width="106" src="/index/trustpilot.png"></nuxt-img>
        </div>
      </v-container>
    </section>

    <section class="main__video mb-11 mb-lg-16 position-relative">
      <v-container class="py-0 position-relative d-flex justify-center" max-width="818">
        <nuxt-img src="/index/main_video.png" class="w-100" ></nuxt-img>
        <div class="main__pointers overflow-hidden" v-if="!mobile">
          <nuxt-img class="main__pointer" height="758" src="/index/man_pointing.png"></nuxt-img>
          <img class="main__pointer-shadow" src="/index/man_pointing_shadow.png">
        </div>

        <div class="overflow-hidden" v-if="display.sm || display.md">
          <nuxt-img class="main__stick" height="304" src="/index/man_stick.png"></nuxt-img>
          <nuxt-img class="main__stick-shadow" height="301" src="/index/man_stick_shadow.png"></nuxt-img>
        </div>
        <div class="overflow-hidden" v-if="display.xs">
          <nuxt-img class="main__stick" height="304" src="/index/man_stick_crop.png"></nuxt-img>
          <nuxt-img class="main__stick-shadow" height="301" src="/index/man_stick_crop_shadow.png"></nuxt-img>
        </div>
      </v-container>
    </section>

    <section class="main__info-cards">
      <v-container class="py-0 position-relative" :max-width="useCalcContainer(912)">
        <div class="d-flex justify-center align-center flex-column">
          <button @click="navigateTo('/games')" class="gold-button mb-11 mb-lg-15" :style="display.xs ? 'width: 256px' : 'width: 278px'">
            Explore all games
          </button>
          <div class="d-flex ga-10 justify-center w-100 flex-wrap">
            <v-sheet v-for="info in infoCards" :width="xs ? 140 : 277" :height="xs ? 58 : 146" class="main__info-card bg-transparent d-flex justify-center align-center">
              <span class="fs-24 text-center text-img text-uppercase">{{ info }}</span>
            </v-sheet>
          </div>
        </div>
      </v-container>
    </section>

    <section class="main__games">
      <Marquee/>
    </section>

    <ImageText class="main__img-text"/>

    <VideoSwiper class="main__swiper"/>

    <section class="main__info">
      <v-container class="py-0">
        <div class="d-flex justify-center flex-column align-center">
          <span class="fs-20 text-uppercase text-white font-weight-medium mb-2">Rated <span class="text-img fs-24">4.9</span> out of <span class="fs-24 text-img">5</span> based on <span class="fs-24 text-img">333</span> reviews.</span>
          <img class="mb-2" src="/index/stars.png">
          <img class="main__trustpilot" src="/index/trustpilot.png">
        </div>
      </v-container>
    </section>

    <section class="main__feedback px-4 px-lg-0">
      <Comments/>
    </section>

    <Contact/>
    <Footer/>
  </div>
</template>

<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { useDisplay } from "vuetify";
import VideoSwiper from "~/components/Index/VideoSwiper.vue";
import ImageText from "~/components/Index/ImageText.vue";
import { useCalcContainer } from "~/composables/useCalcContainer";
import Marquee from "~/components/Index/Marquee.vue";
import 'swiper/css';
import 'swiper/css/pagination';
import Comments from "~/components/Index/Comments.vue";

const { mobile, xs } = useDisplay();

const display = ref(useDisplay())
const infoCards = [
  "RANK AND LEVEL BOOSTING",
  "gold",
  "questing",
  "RAID AND DUNGEON RUNS",
  "skin unlocks",
  "coaching",
];

</script>

<style lang="scss">


.main {
  background-image: url("/index/main_bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;;
  position: relative;

  @media(max-width: 1200px) {
    background-image: none;
  }

  &__swiper-wrapper {
    margin-bottom: 89px;

    @media(max-width: 1200px) {
      margin-bottom: 102px;
    }
  }

  .mySwiper {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: -1px;
      height: 100%;
      width: 224px;
      background: linear-gradient(90deg, rgba(1,55,37,0) 0%, rgba(1,58,38,1) 100%);
      z-index: 10;
      pointer-events: none;

      @media(max-width: 1200px) {
        background: none;
      }
    }
  }

  &__info {
    margin-bottom: 109px;

    &-card {
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
  }

  &__games {
    position: relative;
    z-index: 5;
    margin-bottom: 180px;

    @media(max-width: 1200px) {
      margin-bottom: 106px;
    }
  }

  &__feedback {
    margin-bottom: 180px;

    @media(max-width: 600px) {
      margin-bottom: 101px;
    }

    &-container {
      margin-bottom: 101px;
    }
  }

  &__feedback-card {
    background-image: url('/index/noise_cube.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(50px);
    user-select: none
  }

  &__img-text {
    margin-bottom: 102px;

    @media(max-width: 1200px) {
      margin-bottom: 102px;
    }
  }

  &__images-texts {
    margin-bottom: 109px;

    @media(max-width: 1200px) {
      margin-bottom: 40px;
    }
  }

  &__swiper {
    margin-bottom: 139px;

    @media(max-width: 1200px) {
      margin-bottom: 102px;
    }
  }

  &__pointer {
    position: absolute;
    z-index: 10;
    top: 10%;
    right: -25%;
  }

  &__pointer-shadow {
    position: absolute;
    z-index: 4;
    right: -22%;
    top: 162%;
  }

  &__stick {
    position: absolute;
    z-index: 10;
    bottom: -170px;
    right: 0;
    height: 304px;
    overflow: hidden;
  }

  &__stick-shadow {
    position: absolute;
    z-index: 4;
    right: 0;
    bottom: -420px;
    height: 300px;
  }

  &__city {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
  }

  &__menu {
    margin-bottom: 180px;
    position: relative;
    z-index: 5;

    @media(max-width: 1200px) {
      margin-bottom: 52px;
    }
  }

  &__top-block {
    position: relative;
    z-index: 5;
  }

  &__trustpilot {
    max-width: 106px;
  }

  &__video {
    position: relative;
    z-index: 5;

    &__video {
      max-width: 786px;
      width: 100%;
    }
  }
}


</style>