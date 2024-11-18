<script setup lang="ts">
const display = ref(useDisplay());

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
  <h2 class="text-yellow-josefin fs-18 font-weight-regular text-uppercase text-center mb-6 mb-sm-8">Or Leave An Email Inquiry</h2>
  <v-form v-model="form" class="bg-transparent" @submit.prevent>
    <div :class="emailErrorMessage != '' ? 'field__wrapper-error' : 'field__wrapper'">
      <v-text-field color="green"
                    v-model="email"
                    @input="emailErrorMessage = ''; success = false"
                    placeholder="Your Email Address"
                    :error-messages="emailErrorMessage" required
                    :rules="[(v: any) => !!v || 'Email is required', (v: any) => (v && /.+@.+\..+/.test(v)) || 'Email is required']"
                    variant="plain" type="text"
                    hide-details class="custom-input"
                    :aria-invalid="emailErrorMessage != ''"
                    rounded="0">
      </v-text-field>
    </div>
    <v-sheet class="bg-transparent d-flex align-center justify-center" height="24">
      <p class="opt__email-error-message fs-10 text-center text-uppercase title">{{ emailErrorMessage }}</p>
    </v-sheet>
    <div class="field__wrapper mb-6">
      <v-text-field v-model="game" @input="success = false" placeholder="GAME YOU PLAY" variant="plain" type="text" hide-details class="custom-input" rounded="0"></v-text-field>
    </div>
    <v-sheet class="field__wrapper bg-transparent">
      <v-textarea v-model="request" @input="success = false" :rows="display.smAndUp ? 7 : 9" placeholder="YOUR REQUEST" variant="plain" type="text" hide-details class="custom-input h-100" rounded="0"></v-textarea>
    </v-sheet>
    <v-sheet class="mb-4 bg-transparent text-center d-flex align-end justify-center" :height="display.mobile ? 32 : 40">
      <p class="title custom-yellow font-weight-regular text-uppercase" :class="display.lgAndUp ? 'fs-16' : 'fs-12'" v-if="success">Message Sent, our team will reach you soon!</p>
    </v-sheet>
    <div class="d-flex justify-center justify-sm-end">
      <button @click="submit()" class="gold-button" :style="display.xs ? 'width: 294px' : 'width: 239px'">
        SEND REQUEST
      </button>
    </div>
  </v-form>

</template>

<style lang="scss">
.opt {
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

  &__email-error-message {
    color: #E27070;
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

      input {
        transition: padding 0.3s ease, font-size 0.3s ease, color 0.3s ease;
        padding: 0 24px;
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

      textarea {
        transition: padding 0.3s ease, font-size 0.3s ease, color 0.3s ease;
        padding: 22px 24px;
        border: none;
        text-transform: uppercase;
        font-size: 15px;

        @media(max-width: 600px) {
          font-size: 12px;
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

          &:hover {
            color: red
          }
        }
      }
    }
  }
}


</style>