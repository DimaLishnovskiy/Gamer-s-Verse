<script lang="ts" setup>
useHead({
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js",
      type: "text/javascript",
      async: true
    }
  ],
});

</script>
<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>


<style lang="scss">
.text-img {
  font-weight: bold;
  color: transparent;
  background-image: url("/gold.png");
  background-size: cover;
  background-clip: text;
  -webkit-background-clip: text;
}

.gold-button {
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
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Josefin Sans', sans-serif;
  height: 60px;
  transform-style: preserve-3d;

  @media(max-width: 600px) {
    font-size: 16px;
  }

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

  span {
    margin-right: 10px; /* Відступ для іконки */
    font-size: 18px;
    z-index: 3;
  }

  &:hover {
    background: #023022;
    color: #FAE97E;

    span {
      background: #FAE97E;
    }

    &:before {
      background: linear-gradient(90deg, rgba(195, 162, 66, 1) 0%, rgba(244, 233, 149, 1) 100%);
    }
  }

  &:active {
    background: #143F32;
    color: #FAE97E;
  }

  &:disabled {
    color: #999999;
    background: rgba(153, 153, 153, 0.2);

    &:before {
      background: transparent;
      border: 4px solid #999999;
    }
  }

}
</style>
