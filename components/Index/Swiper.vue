<script setup lang="ts">

</script>

<template>
  <v-container class="py-0">
    <h3 class="fs-36 font-weight-bold title text-white text-center mb-11 text-uppercase"><span class="d-block">What gamers say</span> about us</h3>
    <swiper-container
      :navigation="{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }"
      :slidesPerView="5"
      effect="coverflow"
      :coverflowEffect="{ rotate: 0, stretch: 100, depth: 300, modifier: 1 }"
      pagination
    >
      <swiper-slide>
        <nuxt-img width="275" src="/index/slide.png" alt="Image 1"></nuxt-img>
      </swiper-slide>
      <swiper-slide>
        <nuxt-img width="275" src="/index/slide.png" alt="Image 1"></nuxt-img>
      </swiper-slide>
      <swiper-slide>
        <nuxt-img width="275" src="/index/slide.png" alt="Image 1"></nuxt-img>
      </swiper-slide>
      <swiper-slide>
        <nuxt-img width="275" src="/index/slide.png" alt="Image 1"></nuxt-img>
      </swiper-slide>
      <swiper-slide>
        <nuxt-img width="275" src="/index/slide.png" alt="Image 1"></nuxt-img>
      </swiper-slide>
      <swiper-slide>
        <nuxt-img width="275" src="/index/slide.png" alt="Image 1"></nuxt-img>
      </swiper-slide>
    </swiper-container>
  </v-container>
</template>

<style scoped lang="scss">

</style>