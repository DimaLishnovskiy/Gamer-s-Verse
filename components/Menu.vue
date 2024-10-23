<script setup lang="ts">
const { mobile } = useDisplay();
const menuLeft = [
  {
    name: "Home",
    to: "/",
    route: "index"
  },
  {
    name: "Games",
    to: "/games",
    route: "games"
  },
  {
    name: "Find game",
    to: "/find-game",
    route: "find-game"
  },
];

const menuRight = [
  {
    name: "Contact us",
    to: "/contact-us",
    route: "contact-us"
  },
  {
    name: "About us",
    to: "/about-us",
    route: "about-us"
  },
];

const route = useRoute()

const selected = ref();
const burgerClick = ref(false)
</script>

<template>
  <header>
    <template v-if="!mobile">
      <div class="d-flex justify-center">
        <v-sheet fluid width="100%" :max-width="useCalcContainer(944)" class="bg-transparent">
          <v-row no-gutters>
            <v-col cols="12">
              <div class="d-flex align-center justify-space-between pr-15">
                <v-sheet max-width="284" class="d-flex w-100 justify-space-between bg-transparent">
                  <nuxt-link :to="item.to" class="text-uppercase text-decoration-none custom-white title fs-16" v-for="item in menuLeft">{{ item.name }}</nuxt-link>
                </v-sheet>
                <nuxt-img src="/logo_text.svg" :width="mobile ? 134 : 289"></nuxt-img>
                <v-sheet max-width="227" class="d-flex w-100 justify-space-between bg-transparent">
                  <nuxt-link :to="item.to" class="text-uppercase text-decoration-none custom-white title fs-16" v-for="item in menuRight">{{ item.name }}</nuxt-link>
                </v-sheet>
              </div>
            </v-col>
          </v-row>
        </v-sheet>
      </div>
    </template>
    <template v-if="mobile">
      <div class="d-flex justify-center align-center pl-9 pr-2">
        <img class="mx-auto" :width="mobile ? 134 : 289" src="/logo_text.svg" >

        <v-menu class="position-absolute" width="353" open-on-click v-model="burgerClick" style="position: absolute; right: 0;">
          <template v-slot:activator="{ props }">
            <div v-bind="props" :class="{ active: burgerClick }">
              <v-btn :ripple="false" icon="/" class="bg-transparent" variant="text" dark v-bind="props">
                <NuxtImg width="34" :src="burgerClick ? '/burger_opened.png' : '/burger.png'"></NuxtImg>
              </v-btn>
            </div>
          </template>

          <v-list class="menu__mobile-opened pa-3" variant="text" width="100%">
            <v-item-group v-model="selected" mandatory>
              <v-list-item-title v-for="(filter) in menuRight.concat(menuLeft)" class="py-6 text-center">
                <v-item :value="filter">
                  <nuxt-link v-if="route.name != filter.route" :to="`${filter.to}`" class="title text-decoration-none text-uppercase cursor-pointer font-weight-medium fs-16">
                    <span class="custom-white">{{ filter.name }}</span>
                  </nuxt-link>
                  <div v-else class="menu__gold-button cursor-default">
                    {{filter.name}}
                  </div>
                </v-item>
              </v-list-item-title>
            </v-item-group>
          </v-list>
        </v-menu>
      </div>
    </template>
  </header>
</template>

<style scoped lang="scss">
.menu {

  &__gold-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
    padding: 10px 35px 5px 35px;
    border: 2px solid transparent; /* Початковий прозорий бордер */
    border-radius: 100px; /* Заокруглені кути */
    background: url('/gold-button-bg.png') no-repeat center center;
    background-size: cover;
    cursor: pointer;
    transition: background 0.3s, border-color 0.3s;
    background-clip: padding-box;
    position: relative;
    width: 231px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    font-family: 'Josefin Sans', sans-serif;
    height: 64px;
    transform-style: preserve-3d;

    &:before {
      content: "";
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border-radius: 100px;
      background: linear-gradient(90deg, rgba(244, 233, 149, 1) 0%, rgba(195, 162, 66, 1) 100%);
      transition: 0.3s;
      transform: translateZ(-1px);
    }
  }



  &__mobile-opened {
    background: #002E21 !important;
  }
}

.menu-wrapper {
  width: 40px;
  height: 40px;
  cursor: pointer;
  position: relative;
}

.menu-bar {
  position: absolute;
  width: 100%;
  height: 4px;
  background: black;
  left: 0%;
}

.menu-wrapper:hover .menu-bar.active {
  animation:none;
}

</style>