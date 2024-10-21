<script setup lang="ts">
import { Vue3Marquee } from "vue3-marquee";

const containerWidth = (width: number) => {
  return width + 32;
};

const infoCards = [
  "RANK AND LEVEL BOOSTING",
  "gold",
  "questing",
  "RAID AND DUNGEON RUNS",
  "skin unlocks",
  "coaching",
];

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

const imgText = [
  {
    title: "Live Out Your hero’s journey",
    img: "/index/first.png",
    text: "Take over the gaming world by storm. Leave your friends speechless when they see your atomic rate of growth. Enjoy people marveling at your silky-smooth moves and unprecedented prowess to LEAD and WIN. KO NOOBS like Prime Iron Mike."
  },
  {
    title: "Dominate & Conquer The Gaming World",
    img: "/index/second.png",
    text: "Take a deep breath and imagine you are prime Mike Tyson completely annihilating your opponents. Go against social conventions of being average …compliant …and pleasant."
  },
  {
    title: "With great power comes great responsibility.",
    img: "/index/third.png",
    text: "If you can handle it, get in touch with Ball Hard, he will hook you up with ALL the tools you need to become a HERO. The rest will be up to you."
  },
];
</script>

<template>
  <div class="main">
    <Menu class="pt-10 main__menu"/>
    <img class="main__city" src="/index/city.svg">

    <section class="main__top-block mb-15">
      <v-container :max-width="containerWidth(896)" class="py-0">
        <div class="d-flex justify-center flex-column align-center">
          <h1 class="fs-72 text-uppercase text-center text-white title mb-3">
            <span class="d-block"><span>win</span> At Any Game</span>
            <span>You Play</span>
          </h1>
          <p class="fs-16 font-weight-medium title custom-yellow mb-2">7000+ happy clients</p>
          <img class="mb-2" src="/index/stars.png">
          <img class="main__trustpilot" src="/index/trustpilot.png">
        </div>
      </v-container>
    </section>

    <section class="main__video mb-16">
      <v-container class="py-0 position-relative" max-width="818">
        <div class="d-flex justify-center">
          <iframe class="main__video__video" height="474"  frameborder="0"></iframe>
        </div>
        <div class="main__pointers">
          <nuxt-img class="main__pointer" height="758" src="/index/man_pointing.png"></nuxt-img>
          <img class="main__pointer-shadow" src="/index/man_pointing_shadow.png">
        </div>
      </v-container>
    </section>

    <section class="main__info-cards">
      <v-container class="py-0" :max-width="containerWidth(912)">
        <div class="d-flex justify-center align-center flex-column">
          <v-btn class="mb-16" height="64">Explore all games</v-btn>
          <div class="d-flex ga-10 justify-center justify-sm-space-between w-100 flex-wrap">
            <v-sheet v-for="info in infoCards" width="277" height="146" class="main__info-card bg-transparent d-flex justify-center align-center">
              <span class="fs-24 text-center custom-yellow text-uppercase">{{ info }}</span>
            </v-sheet>
          </div>
        </div>
      </v-container>
    </section>

    <section class="main__games">
      <v-container class="py-0" :max-width="containerWidth(912)">
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
    </section>

    <section v-if="false">
      <v-container max-width="578">
        <div class="d-flex justify-center align-center flex-column">
          <div v-for="(item, key) in imgText" :key='key' class="d-flex flex-column align-center">
            <h3 class="fs-36 font-weight-bold title text-white text-center">{{ item.title }}</h3>
            <img src="/index/divider.png">
            <div class="">
              <img :src="item.img">
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </v-container>
    </section>
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

  &__info-cards {
    margin-bottom: 180px;
  }

  &__info-card {
    background-image: url('/noise.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
  }

  &__games {
    position: relative;
    z-index: 5;
    margin-bottom: 180px;
  }

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