<script setup lang="ts">
const display = ref(useDisplay());
</script>

<template>
  <div class="contact__container">
    <div class="contact__contact h-100">
      <v-container :max-width="useCalcContainer(944)" class="w-100 bg-transparent contact__contact_container pl-15">
        <div class="opt__contact_content">
          <p class="fs-40 text-uppercase text-white title font-weight-bold mb-4">contact support</p>
          <p class="text-white text-uppercase title fs-20 font-weight-medium mb-7">Need further assistance with your <span class="d-block d-sm-inline">order?</span></p>
          <v-btn class="contact__custom-button title lh-1 pt-1" size="x-large" height="64" :width="display.smAndUp ? 239 : 218">
            CONTACT US
          </v-btn>
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss">
.contact {

  &__custom-button {
    color: black;
    background-image: url('/gold_button_bg.png'); /* Шлях до вашого фонового зображення */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100px;
    font-weight: 600 !important;

    &:hover {
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    }
  }

  &__contact_content {
    @media(max-width: 900px) {
      padding: 0 60px
    }
  }

  &__container {
    background-image: url('/contact_bg.png');
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 305px;
  }

  &__contact {
    width: 100%;
    height: 296px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/punch.png');
    background-position: right bottom;
    background-repeat: no-repeat;
    background-size: contain;

    @media (max-width: 768px) {
      background-size: 70%;
    }
  }
}
</style>