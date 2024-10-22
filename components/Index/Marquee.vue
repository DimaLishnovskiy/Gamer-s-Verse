<script setup lang="ts">

import { Vue3Marquee } from "vue3-marquee";
import { useCalcContainer } from "~/composables/useCalcContainer";

const allGames = [
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
  <v-container class="py-0" :max-width="useCalcContainer(912)">
    <div class="d-flex justify-center align-center flex-column">
      <h2 class="text-white fs-40 font-weight-bold text-center text-uppercase title mb-9">
        <span class="d-block">When we say <span>any game</span> </span>
        <span>we mean it</span>
      </h2>
    </div>
  </v-container>

  <vue3-marquee :duration="120" class="mb-15">
    <div v-for="game in allGames" class="d-flex px-3">
      <v-sheet class="main__game bg-transparent" width="277" height="146">
        <img :src="game" alt="">
      </v-sheet>
    </div>
  </vue3-marquee>

  <v-container class="py-0">
    <div class="d-flex justify-center align-center flex-column">
      <v-btn height="64">Explore all games</v-btn>
    </div>
  </v-container>
</template>

<style lang="scss">
.main {
  &__game {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/noise.png');
    background-repeat: no-repeat;
    background-size: contain;
    height: 146px;
    max-width: 277px;
    width: 100%;
  }
}
</style>