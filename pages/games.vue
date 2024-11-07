<script setup lang="ts">
import Choose from "~/components/Games/Choose.vue";
import Contact from "~/components/Contact.vue";
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";

const { xs, mobile } = useDisplay();
const display = ref(useDisplay());

const noResults = computed(() => filteredGames.value.length === 0);
const search = ref("");
const debounceTimeout = ref<number | null>(null); // Дебаунс змінна
const debounceSearch = ref("");

const games = [
  { src: "/games/warcraft.svg", name: "Warcraft" },
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

const sortedGames = computed(() => {
  if (!debounceSearch.value) return games;

  return [...games].sort((a, b) => {
    const matchA = a.name.toLowerCase().includes(search.value.toLowerCase()) ? 1 : 0;
    const matchB = b.name.toLowerCase().includes(search.value.toLowerCase()) ? 1 : 0;
    return matchB - matchA;
  });
});

const filteredGames = computed(() => {
  if (!debounceSearch.value) return games;

  return games
  .map((game) => ({
    ...game,
    matchScore: game.name.toLowerCase().includes(debounceSearch.value.toLowerCase()) ? 1 : 0,
  }))
  .filter((game) => game.matchScore > 0)
  .sort((a, b) => b.matchScore - a.matchScore); // Sort by match score
});

watch(search, (newQuery) => {
  if (debounceTimeout.value) clearTimeout(debounceTimeout.value);
  debounceTimeout.value = window.setTimeout(() => {
    debounceSearch.value = newQuery;
  }, 400);
});

const modal = ref(false);
</script>

<template>
  <div v-if="display.smAndUp" class="game__cards-bg">
    <Menu class="game__menu"></Menu>

    <v-container class="game__cards" max-width="1212" width="100%">
      <v-row no-gutters>
        <v-col cols="12">
          <div class="game">
            <div class="d-flex flex-column flex-lg-row align-center justify-space-between align-end">
              <h1 class="text-white game__title text-uppercase title mb-6"><span class="">Choose</span><br>Your Game</h1>
              <v-sheet class="field__wrapper bg-transparent w-100 mb-16 mb-lg-0" :height="xs ? 44 : 66" :max-width="mobile ? '100%' : 478">
                <v-text-field v-model="search" placeholder="ENTER GAME’S NAME" variant="plain" type="text" :max-width="mobile ? '100%' : 478" hide-details class=" custom-input " rounded="0">
                  <template v-slot:prepend-inner>
                    <nuxt-img width="16" src="/lupa.svg"></nuxt-img>
                  </template>
                </v-text-field>
                <p class="mt-2 title custom-yellow font-weight-regular text-uppercase mx-auto" :class="display.lgAndUp ? 'fs-16' : 'fs-12'" v-if="noResults">No game found</p>
              </v-sheet>
            </div>
            <div class="d-flex align-start" v-if="!mobile">
              <nuxt-img class="mt-8 mr-1" height="151" src="/little_man.png"></nuxt-img>
              <v-sheet class="gradient-border" max-width="304" :class="{ 'no-results-effect': noResults }">
                <p class="px-2 py-4 text-uppercase text-white title fs-12 text-center cursor-default">can’t find what you looking for? Contact us <nuxt-link class="cursor-pointer text-img" to="/game-request">here</nuxt-link></p>
              </v-sheet>
            </div>
          </div>

          <ContactUs v-model="modal"/>
        </v-col>
        <v-col cols="12" class="d-flex align-center justify-center flex-wrap ga-6">
          <div class="game__card" v-for="game in sortedGames" :key="game.name">
            <img :src="game.src" :alt="game.name" />
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
            <div class="game">
              <div class="d-flex flex-column flex-lg-row align-center justify-space-between align-end">
                <h1 class="text-white game__title text-uppercase title mb-6"><span class="">Choose</span><br>Your Game</h1>
                <v-sheet class="field__wrapper bg-transparent w-100 mb-16 mb-lg-0" :height="xs ? 44 : 66" :max-width="mobile ? '100%' : 478">
                  <v-text-field v-model="search" placeholder="ENTER GAME’S NAME" variant="plain" type="text" :max-width="mobile ? '100%' : 478" hide-details class=" custom-input " rounded="0">
                    <template v-slot:prepend-inner>
                      <nuxt-img width="16" src="/lupa.svg"></nuxt-img>
                    </template>
                  </v-text-field>
                </v-sheet>
              </div>
              <div class="d-flex align-start" v-if="!mobile">
                <nuxt-img class="mt-8 mr-1" height="151" src="/little_man.png"></nuxt-img>
                <v-sheet class="gradient-border" :class="{ 'no-results-effect': noResults }" max-width="304">
                  <p class="px-2 py-4 text-uppercase text-white title fs-12 text-center cursor-pointer">can’t find what you looking for? Contact us <span class="cursor-pointer text-img" @click="navigateTo('/game-request')">here</span></p>
                </v-sheet>
              </div>
            </div>

            <ContactUs v-model="modal"/>
          </v-col>
          <v-col cols="12">
            <div class="game__cards-mobile position-relative d-flex align-center justify-center flex-wrap ga-6">
              <div class="game__card" v-for="game in sortedGames">
                <img :src="game.src" alt="">
              </div>
              <div class="d-flex align-start mt-13 mb-11" v-if="mobile">
                <v-sheet class="gradient-border" max-width="286">
                  <p class="px-2 py-4 text-uppercase text-white title fs-12 text-center cursor-pointer">can’t find what you looking for? Contact us <span @click="navigateTo('/game-request')" class="text-img cursor-pointer">here</span></p>
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

  <ContactUs v-model="modal"/>
</template>

<style lang="scss">
.no-results-effect {
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.02);
  }
}

.gradient-border {
  position: relative;
  transform-style: preserve-3d;
  background: rgba(0, 46, 33, 1);
  padding: 1px; /* Внутрішнє відступання для відображення бордера */
  opacity: 1;
  z-index: 5;

  p {
    color: rgba(256, 256, 256, 0.75) !important;
  }
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

  p {
    color: rgba(256, 256, 256, 1) !important;
  }
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
    transition: border 0.3s ease, background-image 0.3s ease;

    @media(max-width: 600px) {
      height: 112px;
      max-width: 212px;
    }

    &:hover {
      border: 1px solid #FAE97E;
      background-image: none;
    }
  }
}

.game {

  .gradient-border {
    position: relative;
    transform-style: preserve-3d;
    background: rgba(0, 46, 33, 1);
    padding: 1px;
    opacity: 1;
    z-index: 5;
    transition: 0.3s;

    &::before {
      transition: 0.3s;
      content: "";
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      transform: translateZ(-2px);
      background: linear-gradient(90deg, rgba(195,162,66,0.75) 0%, rgba(244,233,149,0.75) 100%);
      background-size: 400% 400%;
      animation: gradientAnimation 6s ease infinite;
    }

    &:hover {
      p {
        transition: 0.3s;
        color: rgba(256, 256, 256, 1) !important;
      }
    }
    &:hover::before {
      background: linear-gradient(90deg, rgba(195,162,66,1) 0%, rgba(244,233,149,1) 100%);
    }
  }

  &__title {
    font-size: 72px;
    line-height: 1;

    @media(max-width: 1200px) {
      font-size: 32px;
    }
  }

  &__speech {
    border: 1px solid yellow;
  }
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

    .v-field__prepend-inner {
      padding-top: 24px !important;
      padding-bottom: 0px;
      padding-left: 24px;

      @media(max-width: 600px) {
        padding-top: 14px !important;
      }
    }

    input {
      transition: padding 0.3s ease, font-size 0.3s ease, color 0.3s ease;
      padding: 0 16px;
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
  }
}
</style>