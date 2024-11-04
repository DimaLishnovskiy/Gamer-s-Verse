<script setup lang="ts">

import { Vue3Marquee } from "vue3-marquee";
import { useCalcContainer } from "~/composables/useCalcContainer";

const allGames = [
  { src: "/games/warcraft.svg", name: "World of Warcraft" },
  { src: "/games/runescape.svg", name: "Runescape" },
  { src: "/games/league_legends.svg", name: "League of Legends" },
  { src: "/games/diablo.svg", name: "Diablo" },
  { src: "/games/exile.png", name: "Path of Exile" },
  { src: "/games/fortnite.png", name: "Fortnite" },
  { src: "/games/call.png", name: "Call of Duty" },
  { src: "/games/fifa.svg", name: "FIFA" },
  { src: "/games/final.png", name: "Final Fantasy" },
  { src: "/games/tarkov.png", name: "Escape from Tarkov" },
  { src: "/games/dota.png", name: "Dota" },
  { src: "/games/overwatch.png", name: "Overwatch" },
  { src: "/games/valorant.png", name: "Valorant" },
  { src: "/games/apex.png", name: "Apex Legends" },
  { src: "/games/rune_scape_old.png", name: "Runescape old" },
  { src: "/games/pocket.png", name: "Pocket League" },
  { src: "/games/cs2.png", name: "Counter Strike 2" },
  { src: "/games/wot.png", name: "World of Tanks" },
];

const display = ref(useDisplay());
</script>

<template>
  <v-container class="py-0" :max-width="useCalcContainer(912)">
    <div class="d-flex justify-center align-center flex-column">
      <h2 class="text-white fs-40 font-weight-bold text-center text-uppercase title mb-4 mb-lg-9">
        <span class="d-block">When we say <span class="text-img">any game</span> </span>
        <span>we mean it</span>
      </h2>
    </div>
  </v-container>

  <vue3-marquee :duration="75" class="mb-10 mb-lg-15">
    <div v-for="game in allGames" class="d-flex px-3">
      <v-sheet class="main__game bg-transparent" width="277" height="146">
        <img :src="game.src" alt="">
      </v-sheet>
    </div>
  </vue3-marquee>

  <v-container class="py-0">
    <div class="d-flex justify-center align-center flex-column">
      <button @click="navigateTo('/games')" class="gold-button d-flex justify-center align-center flex-column" :style="display.xs ? 'width: 256px' : 'width: 278px'">
        Explore all games
      </button>
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