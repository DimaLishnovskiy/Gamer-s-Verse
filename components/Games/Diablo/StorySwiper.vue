<script setup lang="ts">
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Navigation, Pagination} from 'swiper/modules';
import {story} from "~/lib/constants";

const display = ref(useDisplay())
const modules = [EffectCoverflow, Navigation, Pagination];
const activeSlideIndex = ref(0);

const pagination = {
  clickable: true,
  renderBullet: (index, className) => `<span class="${className} custom-bullet-diablo"></span>`,
}

</script>

<template>
  <div class="video-swiper story-swiper-wrapper">
    <div class="wrap d-flex justify-center">
      <v-sheet class="position-relative bg-transparent" :max-width="display.xs ? 310 : 1500">
        <swiper
          :effect="'coverflow'"
          centeredSlides
          :pagination="pagination"
          slidesPerView="auto"
          @slideChange="(swiper) => activeSlideIndex = swiper.realIndex"
          :loop="true"
          :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }"
          :modules="modules"
          class="d-flex justify-center story-swiper"
        >
          <swiper-slide class="position-relative" v-for="(item, index) in story" :key="index">
            <div class="video-wrapper">
              <nuxt-img
                  class="video-frame"
                  src="/img/diablo/diablo-swiper-frame.webp"
                  alt="Frame"
              />
              <img class="image-slide" :src="item.img" :alt="`story_${videoSrc}`">
            </div>
            <div>
              <h3 class="title-text">{{item.title}}</h3>
              <p class="description-text">{{item.text}}</p>
            </div>
          </swiper-slide>
        </swiper>

        <div class="custom-prev">
          <span>&#129172;</span>
        </div>
        <div class="custom-next">
          <span>&#129174;</span>
        </div>
      </v-sheet>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';
@import '@/assets/games';
$active-dot-color: #BF4327;

.story-swiper-wrapper {
  height: 100%;

  @include respond-to("lg") {
    height: initial;
  }

  .wrap.d-flex.justify-center {
    height: 100%;

    @include respond-to("lg") {
      height: initial;
    }
  }

  .main__swiper {
    margin-bottom: 0 !important;

  }

  .video-frame {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1; /* Ensures the frame appears above the video */
    pointer-events: none; /* Allows clicks to pass through to the video */
  }

  .swiper.swiper-coverflow {
    padding-bottom: 41px;
    height: 100%;

    @include respond-to("lg") {
      height: initial;
    }
  }

  .story-swiper {
    .swiper-slide-next, .swiper-slide-prev {
      visibility: hidden !important;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      @include respond-to("lg") {
        flex-direction: row;
      }
    }

    .image-slide {
      width: 90%;
      height: 90%;
      border-radius: 100%;
    }

    .video-wrapper {
      position: relative;
      width: 325px;
      height: 325px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding-top: 12px;
      padding-bottom: 12px;

      @include respond-to("lg") {
        margin-right: 50px;
      }
    }

    .title-text {
      margin-bottom: 16px;

      @include respond-to("lg") {
        margin-bottom: 32px;
      }
    }
  }

  .video-swiper {
    .swiper-slide video {
      border: 10px solid transparent;
      box-sizing: border-box;
      border-radius: 50%;
      width: 84%;
      height: 330px;
      border-radius: 50%;
      -o-object-fit: cover;
      object-fit: cover;

      @include respond-to("lg") {
        height: 450px;
      }

      /* Масштабування товщини рамки для різних розмірів екрану */
      @media (max-width: 1200px) {
        border-width: 9px;
      }
      @media (max-width: 992px) {
        border-width: 9px;
      }
      @media (max-width: 768px) {
        border-width: 7px;
      }
      @media (max-width: 576px) {
        border-width: 7px;
      }
    }

    .custom-bullet-diablo {
      width: 14px;
      height: 14px;
      background: transparent;
      border: 1px solid $active-dot-color;

      &.swiper-pagination-bullet-active {
        background: $active-dot-color;
        margin-right: 25px;
        transform: scale(1.2);

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          width: 20px;
          height: 2px;
          background-color: $active-dot-color;
          border-radius: 1px;
        }
      }
    }

    &__field__wrapper {
      border-image-source: linear-gradient(90deg, rgba(195, 162, 66, 0.5) 0%, rgba(244, 233, 149, 0.5) 100%,) !important;
      border-image-slice: 1;
      border-width: 1px;
      border-style: solid;
      transition: border-image-source 0.3s ease;
    }

    .play-button {
      position: absolute;
      top: 50%;
      left: 47%;
      transform: translate(-40%, -50%);
      cursor: pointer;
      z-index: 1;

      @media(max-width: 600px) {
        left: 46%;
      }
    }

    &:hover .play-button {
      display: block;
    }

    .play-button.invisible {
      opacity: 0 !important;
    }

    .video-controls {
      color: white;
    }

    .custom-prev,
    .custom-next {
      cursor: pointer;
      font-size: 30px;
      color: rgba(191, 67, 39, 1);
      user-select: none;
    }

    .slide-image {
      width: 275px;
      @media (max-width: 600px) {
        width: 175px;
      }
    }

    .wrap {
      position: relative;
    }
  }

  .custom-prev {
    position: absolute;
    left: -70px !important;
    top: 30%;
    z-index: 999;

    @include respond-to("lg") {
      top: 45%;
    }

    @media (max-width: 1100px) {
      left: 3%;
    }

    @media (max-width: 650px) {
      left: -20px !important;
    }
  }

  .custom-next {
    position: absolute;
    right: -70px !important;
    top: 30%;
    z-index: 999;

    @include respond-to("lg") {
      top: 45%;
    }

    @media (max-width: 650px) {
      right: -18px !important;
    }
  }
}
</style>
