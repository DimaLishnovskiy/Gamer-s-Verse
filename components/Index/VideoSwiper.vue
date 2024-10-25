<template>
  <div class="video-swiper">
    <div class="wrap">
      <swiper
        :effect="'coverflow'"
        :centeredSlides="true"
        :slidesPerView="2"
        :loop="true"
        :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }"
        :coverflowEffect="{
        rotate: 0,
        stretch: 100,
        depth: 300,
      }"
        :breakpoints="{
        0: {
          slidesPerView: 2, // Показуємо 2 слайди на мобільних
        },
        450: {
          slidesPerView: 3, // Показуємо 3 слайди на планшетах
        },
        800: {
          slidesPerView: 5, // Показуємо 5 слайдів на великих екранах
        },
        1380: {
          slidesPerView: 6, // Показуємо 6 слайдів на дуже великих екранах
        },
      }"
        :modules="modules"
        class="d-flex justify-center"
      >
        <swiper-slide>
          <nuxt-img class="slide-image" src="/index/slide.png" alt="Image 1"></nuxt-img>
        </swiper-slide>
        <swiper-slide>
          <nuxt-img class="slide-image" src="/index/slide.png" alt="Image 2"></nuxt-img>
        </swiper-slide>
        <swiper-slide>
          <nuxt-img class="slide-image" src="/index/slide.png" alt="Image 3"></nuxt-img>
        </swiper-slide>
        <swiper-slide>
          <nuxt-img class="slide-image" src="/index/slide.png" alt="Image 4"></nuxt-img>
        </swiper-slide>
        <swiper-slide>
          <nuxt-img class="slide-image" src="/index/slide.png" alt="Image 5"></nuxt-img>
        </swiper-slide>
        <swiper-slide>
          <nuxt-img class="slide-image" src="/index/slide.png" alt="Image 4"></nuxt-img>
        </swiper-slide>
        <swiper-slide>
          <nuxt-img class="slide-image" src="/index/slide.png" alt="Image 5"></nuxt-img>
        </swiper-slide>
      </swiper>

      <!-- Navigation buttons -->
      <div class="custom-prev">
        <nuxt-img width="43" src="/index/slide_prev.png" alt="Image 4"></nuxt-img>
      </div>
      <div class="custom-next">
        <nuxt-img width="43" src="/index/slide_next.png" alt="Image 4"></nuxt-img>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  import { EffectCoverflow, Navigation } from 'swiper/modules';

  const modules = [EffectCoverflow, Navigation];
</script>

<style scoped lang="scss">
  .video-swiper {
    .custom-prev,
    .custom-next {
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

    .custom-prev {
      position: absolute;
      left: 10%;
      top: 45%;
      z-index: 999;

      @media (max-width: 1100px) {
        left: 3%;
      }

      @media (max-width: 400px) {
        left: 0;
      }
    }

    .custom-next {
      position: absolute;
      right: 10%;
      top: 45%;
      z-index: 999;
      @media (max-width: 1100px) {
        right: 3%
      }
    }

    .wrap {
      position: relative;

      @media (max-width: 450px) {
        transform: translateX(11px);
      }
    }
  }

</style>
