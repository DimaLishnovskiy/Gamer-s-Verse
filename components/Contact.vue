<script setup lang="ts">

const display = ref(useDisplay());

const modal = ref(false)
</script>

<template>
  <div class="contact__container pt-1">
    <div class="contact__contact h-100">
      <v-container :max-width="useCalcContainer(944)" class="w-100 bg-transparent contact__contact_container pl-0 pl-sm-15 d-flex d-sm-block justify-center">
        <div class="opt__contact_content">
          <p class="fs-40 text-uppercase text-white title font-weight-bold mb-4">contact <span class="text-img">support</span></p>
          <p class="text-white text-uppercase title fs-20 font-weight-medium mb-7">Need further assistance with your <span class="d-block d-sm-inline">order?</span></p>
          <button @click="modal = true" class="gold-button" :style="display.xs ? 'width: 218px' : 'width: 231px'">
            <Icon class="mb-1" name="solar:chat-round-dots-bold" size="18"></Icon>
            Contact Us
          </button>
        </div>
      </v-container>
    </div>
  </div>

  <ContactUs v-model="modal"/>
</template>

<style lang="scss">
.contact {
  &__contact_content {
    @media(max-width: 900px) {

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