<script setup lang="ts">

</script>

<template>
  <div class="opt__contact">
    <v-sheet max-width="944" class="w-100 bg-transparent opt__contact_container">
      <div class="opt__contact_content">
        <p class="fs-40 text-uppercase text-white title font-weight-bold">contact support</p>
        <p class="text-white text-uppercase title fs-20 font-weight-medium">Need further assistance with your order?</p>
      </div>
    </v-sheet>
  </div>
</template>

<style lang="scss">
.opt {
  &__contact_content {
    @media(max-width: 900px) {
      padding: 0 60px
    }
  }

  &__contact {
    margin-top: 10px;
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
      background-size: 50%; /* Зменшуємо розмір фону для менших екранів */
    }
  }
}
</style>