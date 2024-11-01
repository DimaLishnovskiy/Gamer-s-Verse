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
    text: "As always, BHD exceeds expectations. I submitted an order, and they started working on it within 10 minutes. I asked if I could tack on another quest, and they handled all of it in one go. Just a group of hard working guys that do well by their customers. Couldn't ask for more",
  },
  {
    img: "/index/feedback_img2.png",
    text: "I had hit a wall with leveling and started to lose the desire to play altogether. I saw this service in an Ad and did my research. Everything I read was true. They kept me in the loop along the way by sending me screenshots of the progress. Once the service was complete they notified me and I logged back on. Nothing in my bank was touched. They even left a little xp so I could experience my first 99. I commend Mantas and his team for their services!",
  },
  {
    img: "/index/feedback_img3.png",
    text: "Just had them boost my construction for Max PoH (and supply/build it). I had used them in the past for boosting my range for Blow Pipe, obtaining Fighter Torso, and as well as fighting Jad for my Fire Cape. Ball Hards team is quick, diligent, as well fairly priced for there services. Look forward to using them again to knock out more annoying grinds.",
  },
  {
    img: "/index/feedback_img3.png",
    text: "Ive serviced my account multiple times, bought gold, and everything has been better than expected. Kind and trustworthy staff imo Highly recommend",
  },
  {
    img: "/index/feedback_img3.png",
    text: "OSRS was my childhood game that I loved and enjoyed. However now I work on Powerlines outdoors and have a wife and 2 kids. Time is something I don't have when it comes to grinding out the requirements to enjoy the nostalgia of playing that childhood game. Ball Hard's Den has been a lifesaver with that, and they are the most reliable and trustworthy group you could ask for. Everything is always completed fast with regular updates on the progress. They are professional and always have a solution to whatever your problem may be. I will always recommend these guys whenever I can. I am a customer who has done business on multiple occasions with Ball Hard's Den, and I will always come back whenever I need something completed.",
  },
  {
    img: "/index/feedback_img3.png",
    text: "Excellent service! The job was completed within 24 hours of placing my order. Staff responded to Facebook messages in a timely manner and sent screenshots of progress. No issues! No money or items removed from bank or anything! 100% legit!",
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

const shortText = (text: string) => {
  return text.length > 250 ? text.slice(0, 250) + '...' : text
}
</script>

<template>
  <div class="main__swiper-wrapper d-flex justify-end">
    <v-sheet v-if="!xs" :style="mobile ? 'max-width: 100%' : 'max-width: 90%'" class="bg-transparent">
      <swiper
        :slidesPerView=slidesPerView
        :spaceBetween="30"
        :loop="true"
        :centeredSlides="false"
        class="mySwiper">
        <swiper-slide v-for="feedback in feedbacks" class="mr-6">
          <v-sheet width="auto" max-width="100%" :height="display.mdAndUp ? '300': '256'" class="main__feedback-card bg-transparent d-flex pt-8 px-8 pb-2 align-center flex-column overflow-y-auto">
            <img class="pb-8" :src="feedback.img">
            <p style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;" :class="mobile ? 'fs-14' : 'fs-16'" class="custom-yellow text-uppercase font-weight-regular lh-1-7 title text-center">“{{ feedback.text }}“</p>
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
              <p style="overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 7;" class="custom-yellow text-uppercase fs-12 font-weight-regular lh-1-7 title text-center">{{ feedback.text }}</p>
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