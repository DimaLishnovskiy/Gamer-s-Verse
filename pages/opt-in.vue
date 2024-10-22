<script setup lang="ts">

import Inquire from "~/components/OptIn/Inquiry.vue";
import Social from "~/components/OptIn/Social.vue";
import Contact from "~/components/Contact.vue";

const display = ref(useDisplay())
</script>

<template>
  <div class="opt">
    <Menu class="opt__menu"/>
    <nuxt-img v-if="display.smAndUp" src="/opt_city.svg" class="w-100 opt__city"></nuxt-img>
    <nuxt-img v-else src="/opt_city_mobile.svg" class="w-100 opt__city-mobile"></nuxt-img>

    <v-container class="opt__container pt-0 px-3" fluid>
      <v-row class="position-relative" no-gutters>
        <v-col cols="12" class="d-flex justify-center align-center flex-column mb-10 mb-sm-15">
          <img src="/opt/opt_img.png" class="w-100 opt__img">
          <h1 class="text-white text-uppercase font-weight-bold fs-40 title text-center mb-10 mb-sm-15"><span class="d-block d-sm-inline">Leave Your Custom</span> Inquiry</h1>
          <p class="custom-yellow title text-center text-uppercase fs-18 mb-4 mb-sm-10 opt__text">Any game. Any service. We do it all. Whether you need a few thousand XP or a single quest completed. A raid cleaned or a skin unlocked. </p>
          <p class="custom-yellow title text-center text-uppercase fs-18 opt__text">Name your request down below and we will contact our vast network of professional gamers who are ready to make your wildest gaming dreams come true.</p>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center flex-column align-center mb-10 mb-sm-15">
          <p class="custom-yellow title text-center text-uppercase fs-18 opt__text mb-6 mb-sm-8">Get In Touch Via Messaging Apps</p>
          <Social/>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-sheet class="bg-transparent w-100" max-width="478">
            <Inquire/>
          </v-sheet>
        </v-col>
        <div class="opt__light"></div>
      </v-row>
    </v-container>

    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
.opt {
  background-image: url("/opt_bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  background-position: bottom;
  backdrop-filter: blur(20px);
  position: relative;

  @media (max-width: 600px) {
    background-image: url("/opt_bg_mobile.svg");
  }

  &__city-mobile {
    position: absolute;
    z-index: 1;
    top: -40px;
    width: 100%;
  }

  &__container {
    max-width: 850px;
    width: 100%;
    position: relative;
    z-index: 5;
    margin-bottom: 187px;

    @media(max-width: 600px) {
      margin-bottom: 119px;
    }
  }

  &__menu {
    position: relative;
    z-index: 5;
    padding-top: 38px;
    margin-bottom: 111px;

    @media(max-width: 600px) {
      margin-bottom: 117px;
    }
  }

  &__img {
    margin-bottom: 80px;

    @media(max-width: 600px) {
      margin-bottom: 95px;
    }
  }

  &__text {
    line-height: 32px;
    letter-spacing: 1.01px;

    @media(max-width: 600px) {
      line-height: 16px;
    }
  }

  &__city {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
  }
}
</style>