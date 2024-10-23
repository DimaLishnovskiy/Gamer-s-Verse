<script setup lang="ts">

import Choose from "~/components/Games/Choose.vue";
import Contact from "~/components/Contact.vue";

const { mobile } = useDisplay();
const display = ref(useDisplay());

const images = [
  "/games/warcraft.svg",
  "/games/runescape.svg",
  "/games/league_legends.svg",
  "/games/diablo.svg",
  "/games/fifa.svg",
  "/games/dota.png",
  "/games/valorant.png",
  "/games/exile.png",
  "/games/apex.png",
  "/games/cs2.png",
  "/games/final.png",
  "/games/fortnite.png",
  "/games/overwatch.png",
  "/games/call.png",
  "/games/wot.png",
  "/games/tarkov.png",
];
</script>

<template>
  <div v-if="display.smAndUp" class="game__cards-bg">
    <Menu class="game__menu"></Menu>
    <v-container class="game__cards" max-width="1212" width="100%">
      <v-row no-gutters>
        <v-col cols="12">
          <Choose/>
        </v-col>
        <v-col cols="12" class="d-flex align-center justify-center flex-wrap ga-6">
          <div class="game__card" v-for="image in images">
            <img :src="image" alt="">
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <div>
      <Menu class="game__menu "></Menu>
      <v-container class="py-0" max-width="1212" width="100%">
        <v-row no-gutters>
          <v-col cols="12">
            <Choose/>
          </v-col>
          <v-col cols="12">
            <div class="game__cards-mobile position-relative d-flex align-center justify-center flex-wrap ga-6">
              <div class="game__card" v-for="image in images">
                <img :src="image" alt="">
              </div>
              <div class="d-flex align-start mt-13 mb-11" v-if="mobile">
                <v-sheet class="gradient-border" max-width="286">
                  <p class="px-2 py-4 text-uppercase text-white title fs-12 text-center">can’t find what you looking for? Contact us here</p>
                </v-sheet>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>

  <Contact></Contact>
  <Footer></Footer>
</template>

<style lang="scss">
.gradient-border {
  position: relative;
  transform-style: preserve-3d;
  background: rgba(0, 46, 33, 1);
  padding: 1px; /* Внутрішнє відступання для відображення бордера */
  opacity: 1;
  z-index: 5;
}

.gradient-border::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  transform: translateZ(-2px);
  background: linear-gradient(90deg, rgba(195,162,66,1) 0%, rgba(244,233,149,1) 100%);
  background-size: 400% 400%;
  animation: gradientAnimation 6s ease infinite;
}

.game {

  &__menu {
    padding-top: 38px;
    margin-bottom: 111px;

    @media(max-width: 600px) {
      padding-top: 16px;
      margin-bottom: 62px;
    }
  }

  &__cards {
    padding-bottom: 81px;

    &-bg {
      background-image: url("/game_bg.svg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: bottom;
    }

    &-mobile {
      &::after {
        content: "";
        background-image: url("/game_bg_mobile.svg");
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        width: 105%;
        bottom: 0;
        z-index: -1;
        height: 1200px;
        overflow: visible;
      }
    }
  }

  &__card {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/noise.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 146px;
    max-width: 277px;
    width: 100%;
    backdrop-filter: blur(50px);
    border: 1px solid rgba(255, 255, 255, 0.2);

    @media(max-width: 600px) {
      height: 112px;
      max-width: 212px;
    }

    &:hover {
      border: 2px solid #FAE97E;
      background-image: none;
    }
  }
}
</style>