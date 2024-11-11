<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Navigation} from 'swiper/modules';

const display = ref(useDisplay())
const modules = [EffectCoverflow, Navigation];

const videoSources = [1,2,3,4,6];

const isPlaying = ref(false);
const isVisible = ref(true)
const isOn = ref(false)
const activeSlideIndex = ref(0);
const hideButtonTimer = ref(0);

const toggleVideo = () => {
  const video = document.querySelector(`#video-${activeSlideIndex.value}`);
  if (video) {
    if (isPlaying.value) {
      video.pause();
      isPlaying.value = false;
    } else {
      video.play();
      isPlaying.value = true;
    }
  }
};

const resetHideButtonTimer = () => {
  clearTimeout(hideButtonTimer.value);
  hideButtonTimer.value = window.setTimeout(() => {
    isVisible.value = false;
  }, 2000);
};


watchEffect(() => {
  // Якщо відео грає, показуємо кнопку і запускаємо таймер для її зникнення
  if (isPlaying.value && isVisible.value && !isOn.value) {
    resetHideButtonTimer();
  } else {
    clearTimeout(hideButtonTimer.value); // Скидаємо таймер
  }
});

const stopNonActiveVideos = () => {
  videoSources.forEach((_, index) => {
    const video = document.getElementById(`video-${index}`);
    if (video && index !== activeSlideIndex.value) {
      video.pause();
    }
  });
};

// Спостерігаємо за зміною активного слайда і зупиняємо відео на інших слайдах
watch(activeSlideIndex, () => {
  stopNonActiveVideos();
});

const updateVideoPlayback = () => {
  videoSources.forEach((_, index) => {
    const video = document.getElementById(`video-${index}`);
    if (video) {
      if (index === activeSlideIndex.value && isPlaying.value === true) {
        video.play(); // Відтворення для активного відео
      } else {
        video.pause(); // Зупинка інших відео
        video.currentTime = 0; // Скидання часу для зупинених відео
      }
    }
  });
};

// Спостерігаємо за зміною активного слайда та оновлюємо відтворення
watch(activeSlideIndex, updateVideoPlayback);

</script>

<template>
  <div class="video-swiper">
    <h3 class="text-center mb-10 mb-lg-12 text-uppercase fs-40 text-white title">
      <span class="d-block">What <span class="text-img">gamers</span> say </span>
      about us
    </h3>
    <div class="wrap d-flex justify-center">
      <v-sheet class="position-relative bg-transparent" :max-width="display.xs ? 310 : 520">
        <swiper
          :effect="'coverflow'"
          :centeredSlides="true"
          :slidesPerView="display.xs ? 1.61 : 2.5"
          @slideChange="(swiper) => activeSlideIndex = swiper.realIndex"
          :loop="true"
          :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }"
          :coverflowEffect="{
            rotate: 0,
            stretch: display.xs ? 100 : 50,
            depth: 250,

          }"
          :breakpoints="{
                  600: { slidesPerView: 1.99, },
          }"

          :modules="modules"
          class="d-flex justify-center"
        >
          <swiper-slide class="position-relative" v-for="(videoSrc, index) in videoSources" :key="index">
            <div>
              <video class="cursor-pointer" :id="`video-${index}`" :width="display.xs ? 190 : 258" :height="display.xs ? 327 : 442" @click="toggleVideo(); isVisible = !isVisible">
                :src="`https://www.youtube.com/embed/${videoSrc}
                <source :src="`/videos/${videoSrc}.mp4`" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <v-sheet width="50" height="50" class="play-button bg-transparent " @click="toggleVideo(); (display.mobile && isPlaying) ? isVisible=false : {}" @mouseover="!isPlaying ? {} : isVisible = true" @mouseleave="!isPlaying ? {} : isVisible = false">
                <nuxt-img width="50" :src="isPlaying ? 'stop.png': `/index/video_play.png`" v-show="isVisible" @mouseover="isOn = true" @mouseleave="isOn = false"></nuxt-img>
              </v-sheet>
            </div>
          </swiper-slide>
        </swiper>

        <div class="custom-prev">
          <nuxt-img width="43" src="/index/slide_prev.png" alt="Image 4"></nuxt-img>
        </div>
        <div class="custom-next">
          <nuxt-img width="43" src="/index/slide_next.png" alt="Image 4"></nuxt-img>
        </div>
      </v-sheet>
    </div>
  </div>
</template>

<style lang="scss">

</style>

<style scoped lang="scss">
.video-swiper {
  .swiper-slide video {
    border: 10px solid transparent; /* Прозора основа для картинки */
    border-image: url('/gold.png') 30 round;
    box-sizing: border-box;
    border-radius: 10px;

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
    left: 60%;
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

  .custom-prev,
  .custom-next {
    cursor: pointer;
    color: white;
    font-size: 24px;
    user-select: none;
  }

  .slide-image {
    width: 275px;
    @media (max-width: 600px) {
      width: 175px;
    }
  }

  .custom-prev {
    position: absolute;
    left: -70px !important;
    top: 45%;
    z-index: 999;

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
    top: 45%;
    z-index: 999;
    @media (max-width: 650px) {
      right: -18px !important;
    }
  }

  .wrap {
    position: relative;

    @media (max-width: 600px) {

    }
  }
}

</style>
