<script setup lang="ts">
const images = [
  { icon: "/messenger_img.png", name: "Messenger", to: "https://m.me/gamingtheballhardsway?ref=w26367461", color: "#5AC2DF40" },
  { icon: "/instagram_img.png", name: "Instagram", to: "https://instagram.com/p/CsBeAvit0V3/", color: '#775ADF40' },
  { icon: "mingcute:whatsapp-fill", name: "WhatsApp", to: "", color: "#8CDE7C40" },
];

  interface Props { showName?: boolean, itemSx?: object, isColor: boolean };

  const display = ref(useDisplay());
  withDefaults(defineProps<Props>(), {
    showName: true,
    isColor: false,
    itemSx: {}
  });
</script>

<template>
  <v-sheet max-width="536" class="d-flex bg-transparent ga-4 justify-center w-100 flex-wrap">
    <v-sheet
        :style="itemSx"
        :class="{'disabled': image.to === ''}" v-for="image in images"
        :width="72"
        :height="64"
        class="image-container bg-transparent d-flex justify-center align-center"
    >
      <nuxt-link :style="{backgroundColor: isColor ? image.color : 'transparent'}" :href="image.to" class="text-decoration-none w-100 h-100 d-flex justify-center flex-column align-center" target="_blank">
        <nuxt-img v-if="image.to !== ''" width="24" height="24" :src="image.icon" class="text-img"></nuxt-img>
        <icon v-else name="mingcute:whatsapp-fill" size="28" class="text-icon"></icon>
        <span class="text-img title font-weight-regular text-uppercase text-center" v-if="showName" :class="display.xs ? 'fs-14' : 'fs-16'">{{ image.name }}</span>
      </nuxt-link>
    </v-sheet>
  </v-sheet>
</template>

<style scoped lang="scss">
.image-container {
  background-image: url('/noise.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  transition: border 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    border: 1px solid #FAE97E;
  }

  &.disabled {
    border: 1px solid rgba(153, 153, 153, 0.95);
    background-image: url('/noise_disabled.png');

    .text-icon {
      color: rgba(153, 153, 153, 0.95);
    }

    .text-img {
      color: rgba(153, 153, 153, 0.95);
    }
  }
}
</style>
