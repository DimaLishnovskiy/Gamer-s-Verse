<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {EffectCoverflow, Navigation, Pagination} from 'swiper/modules';

const display = ref(useDisplay())
const modules = [EffectCoverflow, Navigation, Pagination];

const videoSources = [1,2,3,4,6];

const isPlaying = ref(false);
const isVisible = ref(true)
const isOn = ref(false)
const activeSlideIndex = ref(0);
const hideButtonTimer = ref(0);

const pagination = {
  clickable: true,
  renderBullet: (index, className) => `<span class="${className} custom-bullet-diablo"></span>`,
}

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
    <div class="wrap d-flex justify-center">
      <v-sheet class="position-relative bg-transparent" :max-width="display.xs ? 310 : 520">
        <swiper
          :effect="'coverflow'"
          centeredSlides
          :pagination="pagination"
          :slidesPerView="1"
          @slideChange="(swiper) => activeSlideIndex = swiper.realIndex"
          :loop="true"
          :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }"
          :modules="modules"
          class="d-flex justify-center"
        >
          <swiper-slide class="position-relative" v-for="(videoSrc, index) in videoSources" :key="index">
            <div class="video-wrapper">
              <nuxt-img
                  class="video-frame"
                  src="/img/diablo/diablo-swiper-frame.webp"
                  alt="Frame"
              />
              <video :id="`video-${index}`" :width="display.xs ? 190 : 520" :height="display.xs ? 327 : 468" @click="toggleVideo(); isVisible = !isVisible">
                :src="`https://www.youtube.com/embed/${videoSrc}
                <source :src="`/videos/${videoSrc}.mp4`" type="video/mp4">
                Your browser does not support the video tag.
              </video>
              <v-sheet width="50" height="50" class="play-button bg-transparent " @click="toggleVideo(); (display.mobile && isPlaying) ? isVisible=false : {}" @mouseover="!isPlaying ? {} : isVisible = true" @mouseleave="!isPlaying ? {} : isVisible = false">
                <p class="video-controls" v-if="isPlaying" style="font-size: 50px">&#9611;&#9611;</p>
                <p class="video-controls" v-else style="font-size: 50px">&#x23f5;</p>
              </v-sheet>
            </div>
          </swiper-slide>
        </swiper>

        <div class="custom-prev">
          <nuxt-img
              width="14"
              height="24"
              src="/icon/left-arrow.webp"
              alt="Frame"
          />
        </div>
        <div class="custom-next">
          <nuxt-img
              width="14"
              height="24"
              src="/icon/right-arrow.webp"
              alt="Frame"
          />
        </div>
      </v-sheet>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';
@import '@/assets/games';
$active-dot-color: #BF4327;

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

.video-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  //padding-top: 12px;
  //padding-bottom: 12px;
}

.swiper.swiper-coverflow {
  padding-bottom: 41px;
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
  }
}

</style>
