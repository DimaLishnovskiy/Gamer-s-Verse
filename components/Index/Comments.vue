<script setup lang="ts">

import { Swiper, SwiperSlide } from "swiper/vue";
import { useDisplay } from "vuetify";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';

const feedbacks = [
  {
    img: "/index/feedback_img1.png",
    text: "“I stumbled upon this service and it has completely transformed the way I work. The team behind it is exceptional; they are not just knowledgeable but also incredibly supportive.”",
  },
  {
    img: "/index/feedback_img2.png",
    text: "“I stumbled upon this service and it has completely transformed the way I work. The team behind it is exceptional; they are not just knowledgeable but also incredibly supportive.”",
  },
  {
    img: "/index/feedback_img3.png",
    text: "“I stumbled upon this service and it has completely transformed the way I work. The team behind it is exceptional; they are not just knowledgeable but also incredibly supportive.”",
  },
  {
    img: "/index/feedback_img3.png",
    text: "“I stumbled upon this service and it has completely transformed the way I work. The team behind it is exceptional; they are not just knowledgeable but also incredibly supportive.”",
  },
  {
    img: "/index/feedback_img3.png",
    text: "“I stumbled upon this service and it has completely transformed the way I work. The team behind it is exceptional; they are not just knowledgeable but also incredibly supportive.”",
  },
];

const { mobile, xs } = useDisplay();
const display = ref(useDisplay());

const slidesPerView = computed((): number => {
  if (display.value.lgAndUp) {
    return 3.5;
  } else if (display.value.mdAndUp) {
    return 2.5;
  } else if (display.value.smAndUp) {
    return 1.5;
  } else {
    return 1;
  }
});
</script>

<template>
  <div class="main__swiper-wrapper d-flex justify-end">
    <v-sheet v-if="!xs" :style="mobile ? 'max-width: 100%' : 'max-width: 90%'" class="bg-transparent">
      <swiper
        :slidesPerView=slidesPerView
        :spaceBetween="30"
        :centeredSlides="false"
        class="mySwiper">
        <swiper-slide v-for="feedback in feedbacks" class="mr-6">
          <v-sheet width="auto" max-width="100%" :height="display.mdAndUp ? '300': '256'" class="main__feedback-card bg-transparent d-flex pt-8 px-8 pb-2 align-center flex-column overflow-y-auto">
            <img class="pb-8" :src="feedback.img">
            <p class="custom-yellow text-uppercase fs-16 font-weight-regular lh-1-7 title text-center">{{ feedback.text }}</p>
          </v-sheet>
        </swiper-slide>
      </swiper>
    </v-sheet>

    <v-sheet v-if="xs" style="max-width: 100%" class="bg-transparent">
      <div class="wrap">
        <swiper
          :loop="true"
          :navigation="{
           nextEl: '.custom-next1',
           prevEl: '.custom-prev1',
        }"
          :slidesPerView="1"
          :modules="[Pagination, Navigation]"
          class="mySwiper"
        >
          <swiper-slide v-for="feedback in feedbacks">
            <v-sheet max-width="100%" :height="display.mdAndUp ? '300': '256'" class="main__feedback-card bg-transparent d-flex pt-8 px-8 pb-2 align-center flex-column overflow-y-auto">
              <img class="pb-8" :src="feedback.img">
              <p class="custom-yellow text-uppercase fs-12 font-weight-regular lh-1-7 title text-center">{{ feedback.text }}</p>
            </v-sheet>
          </swiper-slide>
        </swiper>

        <div class="custom-prev1">
          <nuxt-img width="43" src="/index/slide_prev.png" alt="Image 4"></nuxt-img>
        </div>
        <div class="custom-next1">
          <nuxt-img width="43" src="/index/slide_next.png" alt="Image 4"></nuxt-img>
        </div>
      </div>
    </v-sheet>

  </div>
  <div class="d-flex justify-center">
    <button @click="navigateTo('/games')" class="gold-button" :style="display.xs ? 'width: 256px' : 'width: 278px'">
      Explore all games
    </button>
  </div>
</template>

<style scoped lang="scss">
.main {
  &__swiper-wrapper {
    .custom-prev1,
    .custom-next1 {
      cursor: pointer;
      color: white;
      font-size: 24px;
      user-select: none;
      padding: 10px;
    }

    .slide-image {
      width: 275px;
      @media (max-width: 1100px) {
        width: 175px;
      }
    }

    .custom-prev1 {
      position: absolute;
      left: 10%;
      top: 45%;
      z-index: 999;

      @media (max-width: 1100px) {
        left: -4%
      }

      @media(max-width: 450px) {
        left: -7%
      }
    }

    .custom-next1 {
      position: absolute;
      right: 10%;
      top: 45%;
      z-index: 999;
      @media (max-width: 1100px) {
        right: -4%
      }

      @media(max-width: 450px) {
        right: -7%
      }
    }

    .wrap {
      position: relative;
    }
  }
}

</style>