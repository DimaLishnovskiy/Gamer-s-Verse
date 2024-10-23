<script setup lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import { useDisplay } from "vuetify";
import Swiper from "~/components/Index/Swiper.vue";
import ImageText from "~/components/Index/ImageText.vue";
import { useCalcContainer } from "~/composables/useCalcContainer";
import Marquee from "~/components/Index/Marquee.vue";

const { mobile, xs } = useDisplay();


const infoCards = [
  "RANK AND LEVEL BOOSTING",
  "gold",
  "questing",
  "RAID AND DUNGEON RUNS",
  "skin unlocks",
  "coaching",
];

const feedbacks = [
  {
    img: "/index/feedback_img1.png",
    text: "“I stumbled upon this service and it has completely transformed the way I work. The team behind it is exceptional; they are not just knowledgeable but also incredibly supportive.”",
  },
  {
    img: "/index/feedback_img2.png",
    text: "“I stumbled upon this service and it has completely transformed the way I work. The team behind it is exceptional; they are not just knowledgeable but also incredibly supportive.”",
  },
  {
    img: "/index/feedback_img3.png",
    text: "“I stumbled upon this service and it has completely transformed the way I work. The team behind it is exceptional; they are not just knowledgeable but also incredibly supportive.”",
  },
  {
    img: "/index/feedback_img3.png",
    text: "“I stumbled upon this service and it has completely transformed the way I work. The team behind it is exceptional; they are not just knowledgeable but also incredibly supportive.”",
  },
];
</script>

<template>
  <div class="main">
    <Menu class="pt-10 main__menu"/>
    <nuxt-img class="main__city" src="/index/city.svg"></nuxt-img>

    <section class="main__top-block mb-15">
      <v-container :max-width="useCalcContainer(896)" class="py-0">
        <div class="d-flex justify-center flex-column align-center">
          <h1 class="fs-72 text-uppercase text-center text-white title mb-3">
            <span class="d-block"><span>win</span> At Any Game</span>
            <span>You Play</span>
          </h1>
          <p class="fs-16 font-weight-medium title custom-yellow mb-2">7000+ happy clients</p>
          <nuxt-img class="mb-2" width="128" src="/index/stars.png"></nuxt-img>
          <nuxt-img class="main__trustpilot" width="106" src="/index/trustpilot.png"></nuxt-img>
        </div>
      </v-container>
    </section>

    <section class="main__video mb-16">
      <v-container class="py-0 position-relative bg-green-darken-4" max-width="818">
        <div class="d-flex justify-center">
          <iframe class="main__video__video" :height="xs ? 218 : 474" frameborder="0"></iframe>
        </div>
        <div class="main__pointers overflow-hidden" v-if="!mobile">
          <nuxt-img class="main__pointer" height="758" src="/index/man_pointing.png"></nuxt-img>
          <img class="main__pointer-shadow" src="/index/man_pointing_shadow.png">
        </div>
      </v-container>
    </section>

    <section class="main__info-cards">
      <v-container class="py-0 position-relative" :max-width="useCalcContainer(912)">
        <div class="d-flex justify-center align-center flex-column">
          <v-btn class="mb-16" :max-width="mobile ? 256 : 278" height="64">Explore all games</v-btn>
          <div class="d-flex ga-10 justify-center w-100 flex-wrap">
            <v-sheet v-for="info in infoCards" :width="xs ? 140 : 277" :height="xs ? 58 : 146" class="main__info-card bg-transparent d-flex justify-center align-center">
              <span class="fs-24 text-center custom-yellow text-uppercase">{{ info }}</span>
            </v-sheet>
          </div>
        </div>

        <div class="overflow-hidden" v-if="mobile">
          <nuxt-img class="main__stick" height="304" src="/index/man_stick.png"></nuxt-img>
          <nuxt-img class="main__stick-shadow" height="301" src="/index/man_stick_shadow.png"></nuxt-img>
        </div>
      </v-container>
    </section>

    <section class="main__games">
      <Marquee/>
    </section>

    <ImageText class="main__img-text"/>

    <Swiper class="main__swiper"/>

    <section class="main__info">
      <v-container class="py-0">
        <div class="d-flex justify-center flex-column align-center">
          <span class="fs-20 text-uppercase text-white font-weight-medium mb-2">Rated <span class="custom-yellow fs-24">4.9</span> out of <span class="fs-24">5</span> based on <span class="fs-24">333</span> reviews.</span>
          <img class="mb-2" src="/index/stars.png">
          <img class="main__trustpilot" src="/index/trustpilot.png">
        </div>
      </v-container>
    </section>

    <section class="main__feedback">
      <div class="d-flex align-center flex-column">
        <div class="main__feedback-container d-flex ga-10 justify-center justify-sm-space-between w-100 flex-wrap">
          <v-sheet v-for="feedback in feedbacks" width="377" height="377" class="main__feedback-card bg-transparent d-flex pt-8 px-8 align-center flex-column">
            <img class="pb-8" :src="feedback.img">
            <p class="custom-yellow text-uppercase fs-16 font-weight-regular lh-1-7 title text-center">{{ feedback.text }}</p>
          </v-sheet>
        </div>
        <v-btn height="64">Explore all games</v-btn>
      </div>
    </section>

    <Contact/>
    <Footer/>
  </div>
</template>

<style lang="scss">
.main {
  background-image: url("/index/bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  background-position: bottom;;
  position: relative;

  &__info {
    margin-bottom: 109px;
  }

  &__games {
    position: relative;
    z-index: 5;
    margin-bottom: 180px;
  }

  &__feedback {
    margin-bottom: 180px;

    &-container {
      margin-bottom: 106px;
    }
  }

  &__feedback-card {
    background-image: url('/index/noise_cube.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }

  &__img-text {
    margin-bottom: 102px;
  }

  &__images-texts {
    margin-bottom: 109px;
  }

  &__swiper {
    margin-bottom: 139px;
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
    top: -55%;
    right: -6%;
    height: 400px;

    @media(max-width: 950px) {
      top: -25%;
      height: 304px;
    }
  }

  &__stick-shadow {
    position: absolute;
    z-index: 4;
    right: 0;
    top: 20%;
    height: 396px;

    @media(max-width: 950px) {
      top: 15%;
    }
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