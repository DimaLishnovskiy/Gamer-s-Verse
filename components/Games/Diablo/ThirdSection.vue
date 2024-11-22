<script setup lang="ts">
</script>

<template>
  <div class="content-wrapper h-100 mt-10">
    <div class="second-section-content-wrapper h-100">
      <h1 class="title-section title-text">No-Ban Guarantee</h1>
      <iframe
          width="100%"
          :height="300"
          class="youtube-video"
          src="https://www.youtube.com/embed/1eRp0vkQL4s?si=gdnOg0b3u9OtIF7c&amp;controls=0"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
      </iframe>
      <div class="d-flex flex-column description-wrapper text-right">
        <p class="description-text mt-4">
          We use
          <span class="warning-text">RESIDENTIAL PROXY NETWORKS</span>and
          <span class="warning-text">MAC ID MASKERS</span> to make our work look like you yourself are playing while in reality you work or sleep.
        </p>
        <p class="description-text mt-4">
          In four years of business, we have boosted 4578 accounts across <span class="warning-text">MAJOR</span> games such as Runescape, World of Warcraft, and League of Legends.
        </p>
        <p class="warning-text mt-4">RECEIVED <span class="zero">0</span> BANS</p>
        <p class="description-text mt-4">Google our name. Won’t find a single complaint!</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/mixins';
@import '@/assets/games';

.content-wrapper {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.3) 20%,
      rgba(0, 0, 0, 0.9) 100%),
  linear-gradient(180deg, rgb(0, 0, 0) 11%,
          rgba(0, 0, 0, 0.1) 50%, rgb(0, 0, 0) 95%),
  linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%,
          rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.2) 100%),
  url(/img/diablo/fifth-section-background.jpeg);
  background-repeat: no-repeat;
  background-size: cover;

  @include respond-to("lg") {
    background: radial-gradient(circle at center, rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.3) 20%,
        rgba(0, 0, 0, 0.9) 100%),
    linear-gradient(180deg, rgb(0, 0, 0) 11%,
            rgba(0, 0, 0, 0.1) 50%, rgb(0, 0, 0) 95%),
    linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%,
            rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.2) 100%),
    url(/img/diablo/third-section-background.webp);
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.youtube-video {
  @include respond-to("lg") {
    display: none;
  }
}

.second-section-content-wrapper {
  @extend .base-content-wrapper;
  align-items: flex-end;
}

.title-section {
  @extend .base-title-section;
  @include between("xxs", "lg") {
    margin: 0 auto;
  }
}

.zero {
  font-family: Old Fenris;
}

.description-wrapper {
  width: 50%;
  @include between("xxs", "lg") {
    width: 100%;
  }
}
</style>
