<script setup lang="ts">
import ButtonQuote from "~/components/Games/Diablo/ButtonQuote.vue";
import Social from "~/components/OptIn/Social.vue";

const form = ref();
const email = ref('');
const firstName = ref("");
const emailErrorMessage = ref("");
const message = ref("");
const success = ref(false);
</script>

<template>
  <div class="content-wrapper h-100 mt-10">
    <div class="sixth-section-content-wrapper h-100">
        <div class="d-flex flex-column">
          <h1 class="title-section diablo-font title-text mb-4">contact us</h1>
          <p class="description-text mt-8">Detail your inquiry down below and we will get back to you to you within 24 hours. </p>
<!--          todo fix styles of inputs according to design-->
          <v-form v-model="form" class="bg-transparent mb-8 w-100 d-flex mt-16 flex-wrap" @submit.prevent>
            <v-text-field v-model="firstName"
                          color="green"
                          placeholder="First Name"
                          variant="plain" type="text"
                          hide-details
                          class="contactus__custom name-input"
                          rounded="0">
            </v-text-field>
            <v-text-field v-model="email"
                          color="green"
                          @input="emailErrorMessage = ''; success = false"
                          placeholder="Your Email Address"
                          :error-messages="emailErrorMessage" required
                          :rules="[(v: any) => !!v || 'Email is required', (v: any) => (v && /.+@.+\..+/.test(v)) || 'Email is required']"
                          variant="plain" type="text"
                          hide-details
                          class="contactus__custom email-input"
                          rounded="0">
            </v-text-field>

            <v-textarea
                v-model="message"
                class="contactus__custom message-input w-100"
                placeholder="Type Here..."
                variant="plain"
                type="text"
                auto-grow
            ></v-textarea>

            <ButtonQuote class="mt-4 mx-auto" />
          </v-form>

          <nuxt-img src="/img/diablo/diablo-divider.webp"></nuxt-img>
          <p class="mt-4 description-text text-center">Want to chat right now? Contact here! </p>
          <Social :show-name="false" class="mx-auto mt-4"/>
        </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/mixins';
@import '@/assets/games';

.content-wrapper {
  @include base-first-section('/img/diablo/sixth-section-background.webp');
}

.sixth-section-content-wrapper {
  @extend .base-content-wrapper;
  align-items: flex-end;

  .d-flex.flex-column {
    width: 100%;

    @include respond-to("lg") {
      width: 50%;
    }
  }

  .title-section {
    @extend .base-title-section;
    @include between("xxs", "lg") {
      margin: 0 auto !important;
    }
  }
}

.name-input {
  width: 100%;
  @include base_custom_input;

  @include respond-to("lg") {
    margin-right: 4rem;
    width: 40%;
  }
}

.message-input {
  margin-top: 1rem;
  @include base_custom_input;

  @include respond-to("lg") {
    margin-top: 2rem;
  }
}

.email-input {
  width: 100%;
  @include base_custom_input;
  margin-top: 1rem;

  @include respond-to("lg") {
    width: 40%;
    margin-top: 0;
  }
}



</style>
