<script setup lang="ts">
const { xs, mobile } = useDisplay();

const modal = ref(false)
</script>

<template>
  <div class="game">
    <div class="d-flex flex-column flex-lg-row align-center justify-space-between align-end">
      <h1 class="text-white game__title text-uppercase title mb-6"><span class="">Choose</span><br>Your Game</h1>
      <v-sheet class="field__wrapper bg-transparent w-100 mb-16 mb-lg-0" :height="xs ? 44 : 66" :max-width="mobile ? '100%' : 478">
        <v-text-field placeholder="ENTER GAME’S NAME" variant="plain" type="text" :max-width="mobile ? '100%' : 478" hide-details class=" custom-input " rounded="0">
          <template v-slot:prepend-inner>
            <nuxt-img width="16" src="/lupa.svg"></nuxt-img>
          </template>
        </v-text-field>
      </v-sheet>
    </div>
    <div class="d-flex align-start" v-if="!mobile">
      <nuxt-img class="mt-8 mr-1" height="151" src="/little_man.png"></nuxt-img>
      <v-sheet class="gradient-border" max-width="304">
        <p class="px-2 py-4 text-uppercase text-white title fs-12 text-center">can’t find what you looking for? Contact us <span class="cursor-pointer text-img" @click="navigateTo('/game-request')">here</span></p>
      </v-sheet>
    </div>
  </div>

  <ContactUs v-model="modal"/>
</template>

<style lang="scss">
.game {

  .gradient-border {
    position: relative;
    transform-style: preserve-3d;
    background: rgba(0, 46, 33, 1);
    padding: 1px; /* Внутрішнє відступання для відображення бордера */
    opacity: 1;
    z-index: 5;
  }

  .gradient-border::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    transform: translateZ(-2px);
    background: linear-gradient(90deg, rgba(195,162,66,1) 0%, rgba(244,233,149,1) 100%);
    background-size: 400% 400%;
    animation: gradientAnimation 6s ease infinite;
  }

  &__title {
    font-size: 72px;
    line-height: 1;

    @media(max-width: 1200px) {
      font-size: 32px;
    }
  }

  &__speech {
    border: 1px solid yellow;
  }
}

.field__wrapper {
  border-image-source: linear-gradient(90deg, rgba(195, 162, 66, 0.5) 0%, rgba(244, 233, 149, 0.5) 100%,) !important;
  border-image-slice: 1;
  border-width: 1px;
  border-style: solid;
  transition: border-image-source 0.3s ease;

  &:hover {
    border-image-source: linear-gradient(90deg, rgba(195, 162, 66, 1) 0%, rgba(244, 233, 149, 1) 100%,) !important;
  }

  &:focus-within {
    border-image-source: linear-gradient(90deg, rgba(244, 233, 149, 1) 0%, rgba(195, 162, 66, 1) 100%) !important;
  }

  &-error {
    border: 1px solid #E27070;
    transition: border 0.3s ease;
  }
}

.custom-input {
  .v-input__control {
    background-color: rgba(0, 46, 33, 0.7);
    color: #A39162;
    transition: background-color 0.3s ease, color 0.3s ease, border-image 0.3s ease;

    &:hover {
      color: #FAE97E;
      opacity: 1;

      input::placeholder {
        color: #FAE97E;
        opacity: 1;
      }

      textarea::placeholder {
        color: #FAE97E;
        opacity: 1;
      }
    }

    &:focus-within {
      border-image: linear-gradient(90deg, rgba(195, 162, 66, 0.5) 0%, rgba(244, 233, 149, 1) 100%) !important;
      color: #FAE97E;
      opacity: 1;
    }

    .v-field__prepend-inner {
      padding-top: 24px !important;
      padding-bottom: 0px;
      padding-left: 24px;

      @media(max-width: 600px) {
        padding-top: 14px !important;
      }
    }

    input {
      transition: padding 0.3s ease, font-size 0.3s ease, color 0.3s ease;
      padding: 0 16px;
      border: none;
      min-height: 64px;
      text-transform: uppercase;
      font-size: 15px;

      @media(max-width: 600px) {
        min-height: 42px;
        font-size: 12px;
      }

      &[aria-invalid="true"] {
        &::placeholder {
          color: #E27070; /* Червоний колір для placeholder */
        }

        color: #E27070; /* Червоний колір для тексту */
      }

      &::placeholder {
        color: rgba(250, 233, 126, 0.5);
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 600;
        font-family: Josefin Sans, sans-serif;

        @media(max-width: 600px) {
          font-size: 12px;
        }
      }
    }
  }
}
</style>