<script setup lang="ts">
import Story from "~/components/AboutUs/Story.vue";

const textYellowStyles = "custom-yellow text-title title font-weight-regular fs-18";
const { mobile, xs } = useDisplay();
</script>

<template>
  <div class="about">
    <Menu class="about__menu pt-4 pt-lg-10 w-100"/>
    <nuxt-img class="about__city" :src="xs ? '/index/city_mobile_bg.svg' : '/about/about_city.png'"></nuxt-img>

    <v-container class="pa-0 about__title-mobile w-100" fluid>
      <v-row no-gutters>
        <v-col class="d-flex align-center flex-column" cols="12">
          <h1 class="text-center text-white font-weight-bold text-uppercase title about__title lh-1 fs-72" :class="mobile ? 'fs-32' : 'fs-72'">
            <span class="d-md-inline-block d-block mr-0 mr-md-7 text-img">About</span>
            <span>Us</span>
          </h1>
          <nuxt-img src="/about/about.png" class="about__image-main w-100 px-4"></nuxt-img>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="about__container py-0 px-2">
      <v-row no-gutters>
        <v-col cols="12" class="about__block__1 d-flex justify-center">
          <v-sheet max-width="602" class="bg-transparent w-100 d-flex flex-column align-center">
            <div v-if="!mobile" class="d-flex align-center mb-15 px-6 w-100">
              <nuxt-img class="mr-15" width="80" height="80" src="/about/mask.png"></nuxt-img>
              <div class="w-100">
                <p :class="textYellowStyles" :style="mobile ? 'lh-1' : 'lh-2'">From The Desk Of Mantas,</p>
                <p :class="textYellowStyles" :style="mobile ? 'lh-1' : 'lh-2'">Founder of Ball Hard’s Den</p>
              </div>
            </div>
            <p :class="textYellowStyles" :style="mobile ? 'lh-1' : 'lh-2'" class="text-center mt-5 mb-10">For busy real-life hustlers,</p>
            <p :class="textYellowStyles" :style="mobile ? 'lh-1' : 'lh-2'" class="text-center mb-10">Keen students… loving dads… dedicated entrepreneurs…and every motivated person who harbours high-aspirations in the game of life.</p>
            <p :class="textYellowStyles" :style="mobile ? 'lh-1' : 'lh-2'" class="text-center">Having dreams to chase or kids to raise should not get in the way of your aim to dominate the games you play.</p>
          </v-sheet>
        </v-col>

        <v-col cols="12" class="d-flex justify-center">
          <v-sheet max-width="602" class="about__block__2 bg-transparent w-100 d-flex flex-column align-center">
            <h2 class=" title text-uppercase font-weight-bold  text-white" :class="mobile ? 'mb-10' : 'mb-15 fs-40'"><span class="text-img">win</span> all the games</h2>
            <p :class="textYellowStyles" :style="mobile ? 'lh-1' : 'lh-2'" class="text-center mb-10">Our mission is to help you play less so you have time to chase success in the game of real life - and still WIN ONLINE.</p>
            <p :class="textYellowStyles" :style="mobile ? 'lh-1' : 'lh-2'" class="text-center mb-10">Successful people outsource, delegate, and work with MENTORS to level up and progress FAST!</p>
            <p :class="textYellowStyles" :style="mobile ? 'lh-1' : 'lh-2'" class="text-center mb-10">Life is too short to do it all on your own.</p>
            <p :class="textYellowStyles" :style="mobile ? 'lh-1' : 'lh-2'" class="text-center mb-10">Michael Jordan worked with Phil Jackson. Mike Tyson had Cus D'Amato.</p>
            <p :class="textYellowStyles" :style="mobile ? 'lh-1' : 'lh-2'" class="text-center">And people who wanna WIN both online and in the game of life have BALL HARD’S DEN.</p>
          </v-sheet>
        </v-col>

        <v-col cols="12" class="about__btn-fulfill d-flex justify-center">
          <button @click="navigateTo('games')" class="gold-button" style="width: 380px">
            Fulfill Your Gaming Dreams
          </button>
        </v-col>
        <v-col cols="12" class="story d-flex justify-center flex-column align-center">
          <Story/>
        </v-col>
        <v-col cols="12" class="about__end d-flex justify-center flex-column align-center">
          <h2 class="fs-40 text-white font-weight-bold title text-uppercase mb-6 mb-md-10">
            <span class="d-block d-md-inline text-center">Join<span class="text-img"> the </span></span>
            <span class="d-block d-md-inline text-center"><span class="text-img">movement</span> of </span>
            <span class="d-block d-md-inline text-center">Ball Hard’s!</span>
          </h2>
          <span class="custom-yellow about_login title font-weight-medium fs-18 text-uppercase mb-15">log in... ball out... and bounce.</span>
          <button @click="navigateTo('/games')" class="gold-button">Fulfill Your Gaming Dreams</button>
        </v-col>
      </v-row>
    </v-container>

    <Contact/>
    <Footer/>
  </div>
</template>

<style lang="scss">
.story {
  margin-bottom: 180px;

  @media (max-width: 1200px) {
    margin-bottom: 40px;
  }
}

.about {
  background-image: url("/about/about_bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

  &__title {
    margin-bottom: 92px;

    @media(max-width: 1200px) {
      margin-bottom: 56px;
    }
  }

  &__title-mobile {
    position: relative;
    z-index: 5;
    margin-bottom: 80px;

    @media(max-width: 1200px) {
      margin-bottom: 42px;
    }
  }

  &__login {
    color: #FAE97E;
  }

  &__city {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    mix-blend-mode: darken;
  }

  &__menu {
    position: relative;
    z-index: 5;
    margin-bottom: 137px;

    @media(max-width: 1200px) {
      margin-bottom: 52px;
    }
  }

  &__end {
    margin-bottom: 230px;

    @media (max-width: 1200px) {
      margin-bottom: 74px;
    }
  }

  &__btn-fulfill {
    margin-bottom: 180px;

    @media(max-width: 1200px) {
      margin-bottom: 82px;
    }
  }

  &__block__1 {
    margin-bottom: 180px;

    @media(max-width: 1200px) {
      margin-bottom: 60px;
    }
  }

  &__block__2 {
    margin-bottom: 180px;

    @media(max-width: 1200px) {
      margin-bottom: 60px;
    }
  }

  &__container {
    position: relative;
    z-index: 5;
  }

  &__image {
    position: absolute;
    z-index: 1;
    width: 100%;

    @media(max-width: 1200px) {
      height: 450px;
    }
  }

  &__image-main {
    max-width: 818px;
  }
}

.text-title {
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
}

.container-about {
  max-width: 1068px;
}
</style>