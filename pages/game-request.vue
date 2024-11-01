<script setup lang="ts">

import Inquire from "~/components/OptIn/Inquiry.vue";
import Social from "~/components/OptIn/Social.vue";
import Contact from "~/components/Contact.vue";

const display = ref(useDisplay());
</script>

<template>
  <div class="opt">
    <Menu class="opt__menu"/>
    <nuxt-img v-if="display.smAndUp" src="/opt_city.png" class="w-100 opt__city"></nuxt-img>
    <nuxt-img v-else src="/opt_city_mobile.svg" class="w-100 opt__city-mobile"></nuxt-img>

    <v-container class="opt__container pt-0 px-3" fluid>
      <v-row class="position-relative" no-gutters>
        <v-col cols="12" class="d-flex justify-center align-center flex-column mb-10 mb-sm-15">
          <nuxt-img src="/opt/opt_img.png" class="w-100 opt__img"></nuxt-img>
          <h1 class="text-white text-uppercase font-weight-bold fs-40 title text-center mb-10 mb-sm-15"><span class="d-block d-sm-inline">Leave Your Custom</span> Inquiry</h1>
          <p class="custom-yellow title text-center text-uppercase fs-18 mb-4 mb-sm-10 opt__text">Any game. Any service. We do it all. Whether you need a few thousand XP or a single quest completed. A raid cleaned or a skin unlocked.</p>
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

  .field__wrapper {
    border-image-source: linear-gradient(90deg, rgba(195, 162, 66, 0.5) 0%, rgba(244, 233, 149, 0.5) 100%,) !important;
    border-image-slice: 1;
    border-width: 1px;
    border-style: solid;
    transition: border-image-source 0.3s ease;

    &:hover {
      border-image-source: linear-gradient(90deg, rgba(195, 162, 66, 1) 0%, rgba(244, 233, 149, 1) 100%,) !important;
    }

    &:focus-within {
      border-image-source: linear-gradient(90deg, rgba(244, 233, 149, 1) 0%, rgba(195, 162, 66, 1) 100%) !important;
    }

    &-error {
      border: 1px solid #E27070;
      transition: border 0.3s ease;
    }
  }

  .custom-input {
    .v-input__control {
      background-color: rgba(0, 46, 33, 0.7);
      color: #A39162;
      transition: background-color 0.3s ease, color 0.3s ease, border-image 0.3s ease;

      &:hover {
        color: #FAE97E;
        opacity: 1;

        input::placeholder {
          color: #FAE97E;
          opacity: 1;
        }

        textarea::placeholder {
          color: #FAE97E;
          opacity: 1;
        }
      }

      &:focus-within {
        border-image: linear-gradient(90deg, rgba(195, 162, 66, 0.5) 0%, rgba(244, 233, 149, 1) 100%) !important;
        color: #FAE97E;
        opacity: 1;
      }

      input {
        transition: padding 0.3s ease, font-size 0.3s ease, color 0.3s ease;
        padding: 0 24px;
        border: none;
        min-height: 64px;
        text-transform: uppercase;
        font-size: 15px;

        @media(max-width: 600px) {
          min-height: 42px;
          font-size: 12px;
        }

        &[aria-invalid="true"] {
          &::placeholder {
            color: #E27070; /* Червоний колір для placeholder */
          }

          color: #E27070; /* Червоний колір для тексту */
        }

        &::placeholder {
          color: rgba(250, 233, 126, 0.5);
          text-transform: uppercase;
          font-size: 15px;
          font-weight: 600;
          font-family: Josefin Sans, sans-serif;

          @media(max-width: 600px) {
            font-size: 12px;
          }
        }
      }

      textarea {
        transition: padding 0.3s ease, font-size 0.3s ease, color 0.3s ease;
        padding: 22px 24px;
        border: none;
        text-transform: uppercase;
        font-size: 15px;

        @media(max-width: 600px) {
          font-size: 12px;
        }

        &::placeholder {
          color: rgba(250, 233, 126, 0.5);
          text-transform: uppercase;
          font-size: 15px;
          font-weight: 600;
          font-family: Josefin Sans, sans-serif;

          @media(max-width: 600px) {
            font-size: 12px;
          }

          &:hover {
            color: red
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" glo></style>