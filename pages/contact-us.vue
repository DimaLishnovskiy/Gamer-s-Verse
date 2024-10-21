<script lang="ts">

</script>

<template>
  <v-container class="pt-6 px-6 pb-16" fluid>
    <v-row>
      <v-col cols="12">
        <v-sheet class="bg-transparent d-flex justify-space-between">
          <h1 class="pl-9 text-center w-100 custom-yellow fs-40 font-weight-regular text-uppercase title lh-1">Contact Us</h1>
          <nuxt-link to="/">
            <img class="" src="/icon/close.svg">
          </nuxt-link>
        </v-sheet>
      </v-col>
    </v-row>
    <!-- Секція з фоновою картинкою -->
    <div class="background"></div>
  </v-container>
  <v-container class="container-contact">
    <p class="text-center mb-10 text-white title text-uppercase">Hi!</p>
    <p class="text-center text-white title text-uppercase">Don’t hesitate to reach out to our 24/7 customer support team via your preferred communication channel down below </p>
  </v-container>
</template>

<style scoped>
.container-contact {
  max-width: 720px;
  margin: 0 auto;
}

.background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-top: 56%;
  background-image: url('/contact/background.svg');
  background-size: cover;
  background-position: center;
  z-index: -1; /* Розміщення позаду контенту */
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding-bottom: 320px; /* З урахуванням висоти фону */
}
</style>