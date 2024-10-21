<script setup lang="ts">

import Inquire from "~/components/OptIn/Inquiry.vue";
import Social from "~/components/OptIn/Social.vue";
import Contact from "~/components/Contact.vue";
</script>

<template>
  <v-container class="container opt pt-0" fluid>
    <v-row class="position-relative" no-gutters>
      <v-col cols="12" class="d-flex justify-center align-center flex-column pb-8">
        <img src="/opt/opt_img.png" class="w-100 opt__img">
        <h1 class="text-white text-uppercase font-weight-bold title text-center mb-15">Leave Your Custom Inquiry</h1>
        <p class="custom-yellow-josefin text-center text-uppercase fz-18 mb-10 opt__text">Any game. Any service. We do it all. Whether you need a few thousand XP or a single quest completed. A raid cleaned or a skin unlocked. </p>
        <p class="custom-yellow-josefin text-center text-uppercase fz-18 opt__text mb-10">Name your request down below and we will contact our vast network of professional gamers who are ready to make your wildest gaming dreams come true.</p>
        <p class="custom-yellow-josefin text-center text-uppercase fz-18 opt__text">Get In Touch Via Messaging Apps</p>
      </v-col>
      <v-col cols="12" class="d-flex justify-center align-center pb-10">
        <Social/>
      </v-col>
      <v-col>
        <Inquire/>
      </v-col>
      <div class="opt__light"></div>
    </v-row>
  </v-container>
  <img src="/opt/opt_city.png" class="city">

</template>

<style lang="scss" scoped>
.opt {

  &, .container {
    max-width: 850px;
    width: 100%;
    margin: 0 auto;
  }

  &__img {
    margin-bottom: 80px;
  }

  &__text {
    line-height: 32px;
    letter-spacing: 1.01px;
  }
}

.city {
  width: 100%;
  height: auto;
  min-height: 460px;
  max-height: 924px;
  position: absolute;
  top: -60px;
  z-index: -2;
  object-fit: cover;
  
  @media(max-width: 1200px) {
    min-height: 800px;
    top: -70px;
  }

  @media(max-width: 600px) {
    min-height: 600px;
    top: -20px;
  }
}
</style>