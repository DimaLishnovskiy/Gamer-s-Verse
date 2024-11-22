<script setup lang="ts">

const images = [
  { icon: "/messenger_img.png", name: "Messenger", to: "https://m.me/gamingtheballhardsway?ref=w26367461" },
  { icon: "/instagram_img.png", name: "Instagram", to: "https://instagram.com/p/CsBeAvit0V3/" },
  { icon: "mingcute:whatsapp-fill", name: "WhatsApp", to: "" },
  { icon: "/call_img.png", name: "Schedule a Call", to: "https://calendly.com/ballhardsden" },
];

const display = ref(useDisplay());

const modal = ref(false);

const emailErrorMessage = ref("");
const emailRules = [(v: any) => !!v || 'Email is required', (v: any) => (v && /.+@.+\..+/.test(v)) || 'Email is not valid'];
const form = ref();
const email = ref();
const success = ref(false);
const request = ref("");
const game = ref("");

const submit = () => {
  const formValid = form.value;

  if (!formValid) {
    emailErrorMessage.value = emailRules.map((rule) => rule(email.value)).find((msg) => typeof msg === 'string') || '';
  } else {
    success.value = true;
    emailErrorMessage.value = ""
    email.value = ""
    request.value = ""
    game.value = "";
  }
};
</script>

<template>
  <v-dialog v-model="modal" max-width="1200" class="bg-black pa-4 contactus">
    <template v-slot:default="{ isActive }">
      <v-sheet class="contactus__wrapper" width="100%" height="100%" :rounded="display.xs ? 'xl' : 'lg'">

        <v-container class="py-0 px-6" :max-width="display.lgAndUp ? '100%' : useCalcContainer(720)">
          <div class="d-flex justify-space-between align-center justify-lg-center pt-7 pr-0 pr-lg-6 pl-0 pl-lg-14 mb-6 mb-sm-5">
            <h1 class="title fs-40 font-weight-regular custom-yellow text-uppercase ls-1 mx-0 mx-lg-auto">Contact Us</h1>
            <v-btn :ripple="false" icon="/" @click="isActive.value = false" class="bg-transparent">
              <img src="/icon/close.svg">
            </v-btn>
          </div>
        </v-container>

        <v-container class="py-0 px-6 position-relative" :style="display.lgAndUp ? 'margin-bottom: 70px' : 'margin-bottom: 24px'" :max-width="useCalcContainer(720)">

          <nuxt-img v-if="display.lgAndUp" class="contactus__man position-absolute left-0" width="116" src="/contact_man.png"></nuxt-img>

          <div class="d-flex flex-column align-start align-lg-center mb-10">
            <p class="text-white fs-18 font-weight-regular lh-2 text-uppercase mb-9">Hi!</p>
            <p class="text-white fs-18 font-weight-regular lh-2 text-start text-lg-center text-uppercase">Don’t hesitate to reach out to our 24/7 customer support team via your preferred communication channel down below </p>
          </div>

          <v-sheet class="d-flex bg-transparent ga-2 justify-center justify-sm-space-between w-100 flex-wrap mb-6 mb-sm-8">
            <v-sheet :class="{'disabled': image.to === ''}" v-for="image in images" width="100%" :max-width="display.lgAndUp ? 168 : '48%'" :height="display.smAndUp ? 102 : 92" class="contactus__social bg-transparent d-flex justify-center align-center">
              <nuxt-link :href="image.to" class="text-decoration-none w-100 h-100 d-flex justify-center bg-transparent flex-column align-center" target="_blank">
                <nuxt-img v-if="image.to !== ''" width="24" height="24" :src="image.icon" class="text-img mb-3"></nuxt-img>
                <icon v-else name="mingcute:whatsapp-fill" size="28" class="mb-2 text-icon"></icon>
                <span class="text-img title font-weight-regular text-uppercase text-center" :class="display.xs ? 'fs-14' : 'fs-16'">{{ image.name }}</span>
              </nuxt-link>
            </v-sheet>
          </v-sheet>


          <div class="contactus__divider mb-6 mb-sm-8"></div>

          <v-form v-model="form" class="bg-transparent mb-8" @submit.prevent>
            <h3 class="fs-20 title font-weight-regular custom-yellow text-uppercase mb-6">Email Us</h3>

            <div class="d-flex flex-column flex-lg-row align-start justify-center ga-1">
              <div :class="display.lgAndUp ? 'w-40' : 'w-100'">
                <div :class="emailErrorMessage != '' ? 'contactus__field__wrapper-error' : 'contactus__field__wrapper'">
                  <v-text-field v-model="email"
                                color="green"
                                @input="emailErrorMessage = ''; success = false"
                                placeholder="Your Email Address"
                                :error-messages="emailErrorMessage" required
                                :rules="[(v: any) => !!v || 'Email is required', (v: any) => (v && /.+@.+\..+/.test(v)) || 'Email is required']"
                                variant="plain" type="text"
                                hide-details
                                class="contactus__custom-input" :class="{'pr-1' : emailErrorMessage != ''}"
                                :aria-invalid="emailErrorMessage != ''"
                                rounded="0">
                  </v-text-field>
                </div>
                <v-sheet v-if="display.mobile"  class="bg-transparent d-flex align-center justify-center" height="24">
                  <p v-if="emailErrorMessage" class="opt__email-error-message fs-10 text-center text-uppercase title">{{ emailErrorMessage }}</p>
                </v-sheet>
              </div>

              <div :class="display.lgAndUp ? 'w-60' : 'w-100'">
                <div v-if="display.lgAndUp" class="contactus__field__wrapper">
                  <v-text-field v-model="game" @input="success = false" placeholder="Your Message" variant="plain" type="text" hide-details class="contactus__custom-input" rounded="0"></v-text-field>
                </div>
                <v-sheet v-else class="contactus__field__wrapper bg-transparent">
                  <v-textarea v-model="request" @input="success = false" :rows="display.lgAndUp ? 1 : 9" placeholder="Your Message" variant="plain" type="text" hide-details class="contactus__custom-input h-100" rounded="0"></v-textarea>
                </v-sheet>
                <v-sheet v-if="display.mobile" class="bg-transparent justify-center justify-lg-start d-flex align-end mb-3 mb-lg-0" :height="display.mobile ? 32 : 40">
                  <p class="fs-10 title  custom-yellow font-weight-regular text-uppercase" :class="display.lgAndUp ? 'fs-16' : 'fs-12'" v-if="success">Message Sent</p>
                </v-sheet>
              </div>
            </div>
            <v-sheet v-if="!display.mobile" class="bg-transparent d-flex align-end mb-3" :class="emailErrorMessage ? 'align-center' : 'align-end'" :height="display.mobile ? 32 : 40">
              <p class="opt__email-error-message fs-10 text-center text-uppercase title">{{ emailErrorMessage }}</p>
              <p class="title custom-yellow font-weight-regular text-uppercase mx-auto" :class="display.lgAndUp ? 'fs-16' : 'fs-12'" v-if="success">Message Sent, our team will reach you soon!</p>
            </v-sheet>

            <div class="d-flex justify-center justify-sm-end">
              <button @click="submit()" class="gold-button" :style="{width: display.lgAndUp ? '214px' : '100%',height: display.lgAndUp ? '44px' : '64px'}">
                submit
              </button>
            </div>
          </v-form>

          <div class="contactus__divider mb-8"></div>

          <p class="text-white fs-18 text-uppercase title text-start text-lg-center lh-2 mb-6 mb-sm-8">Looking forward to handling your inquiry and helping you dominate online and leave all the noobs in the dust!</p>
          <p class="text-white fs-18 text-uppercase title text-start text-lg-center lh-2">To Your Gaming Gainz,</p>
          <p class="text-white fs-18 text-uppercase title text-start text-lg-center lh-2">Tomas</p>
          <p class="text-white fs-18 text-uppercase title text-start text-lg-center lh-2 mb-6 mb-lg-0">Chief Customer Support Officer</p>
          <nuxt-img v-if="display.mdAndDown" width="53" src="/contact_man.png"></nuxt-img>
        </v-container>
      </v-sheet>
    </template>
  </v-dialog>
</template>

<style lang="scss">
@import '@/assets/mixins';
.contactus {
  &__wrapper {
    background-image: url("/contact/contact_bg.svg") !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    height: 100% !important;
    background-position: bottom !important;
    border: 1px solid #576C6E !important;
    position: relative !important;

    @media(max-width: 1299px) {
      background: #023423 !important;
      background-image: none !important;
    }
  }


  &__man {
    transform: translateX(-140px);
  }

  &__divider {
    background: rgba(91, 83, 69, 0.5);
    width: 100%;
    height: 1px;
  }

  &__email-error-message {
    color: #E27070;
  }

  &__social {
    background-image: url('/noise.png') !important;
    background-size: 100% 100% !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    position: relative !important;
    transition: border 0.3s ease !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    backdrop-filter: blur(50px) !important;

    &:hover {
      border: 1px solid #FAE97E !important;
    }

    &.disabled {
      border: 1px solid rgba(153, 153, 153, 0.95) !important;
      background-image: url('/noise_disabled.png') !important;

      .text-icon {
        color: rgba(153, 153, 153, 0.95);
      }

      .text-img {
        color: rgba(153, 153, 153, 0.95);
      }
    }
  }

  &__field__wrapper {
    border: 2px solid rgba(255, 255, 255, 0.2) !important;
    transition: border-image-source 0.3s ease;

    &:hover {
      border: 2px solid rgba(255, 255, 255, 0.5) !important;
    }

    &-error {
      border: 1px solid #E27070;
      transition: border 0.3s ease;
    }
  }

  &__custom-input {
    @include base_custom_input;
  }
}
</style>

<style lang="scss">
.contactus, .v-dialog {
  .v-overlay__content {
    margin: 16px !important;
    width: calc(100% - 30px) !important;
    max-height: calc(100% - 30px) !important;
  }
}
</style>
