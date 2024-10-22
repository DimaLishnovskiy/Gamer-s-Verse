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
      <v-text-field v-model="game" @input="success = false" placeholder="write your game" variant="plain" type="text" hide-details class="custom-input" rounded="0"></v-text-field>
    </div>
    <v-sheet class="field__wrapper bg-transparent">
      <v-textarea v-model="request" @input="success = false" :rows="display.smAndUp ? 7 : 9" placeholder="YOUR REQUEST" variant="plain" type="text" hide-details class="custom-input h-100" rounded="0"></v-textarea>
    </v-sheet>
    <v-sheet class="mb-4 bg-transparent text-center d-flex align-center justify-center " height="24">
      <p class="fs-10 title custom-yellow font-weight-regular text-uppercase" v-if="success">Message Sent</p>
    </v-sheet>
    <div class="d-flex justify-center justify-sm-end">
      <v-btn @click="submit()" type="submit" variant="text" class="custom-button title lh-1 pt-1" size="x-large" height="64" :width="display.smAndUp ? 239 : 294">
        Send Request
      </v-btn>
    </div>
  </v-form>

</template>

<style lang="scss">
.opt {

  &__email-error-message {
    color: #E27070;
  }

  .custom-button {
    color: black;
    background-image: url('/public/gold_button_bg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100px;
    font-weight: 600;

    //&:hover {
    //  background: linear-gradient(90deg, rgba(195, 162, 66, 0.5) 0%, rgba(244, 233, 149, 0.5) 100%,) !important;
    //
    //  &::before {
    //    content: "click";
    //    position: absolute;
    //    top: 2px;
    //    right: 2px;
    //    bottom: 2px;
    //    left: 2px;
    //    background-color: #023022;
    //    border-radius: 180px;
    //    display: flex;
    //    justify-content: center;
    //    align-items: center;
    //    color: #FAE97E;
    //  }
    //}

    //&:hover {
    //  background-image: none; /* Прибрати фон */
    //  background-color: #FFD700; /* Золотистий колір */
    //  color: #000; /* Текст залишається чорним */
    //  border: 2px solid; /* Встановити рамку з градієнтом */
    //  border-image: linear-gradient(90deg, #FFD700, #FF8C00) 1; /* Лінійний градієнт */
    //}
    //
    //&:active {
    //  background-image: none;
    //  background-color: #C0C000;
    //  color: #000;
    //}

    &:disabled {
      background-image: none;
      background-color: #BDBDBD;
      color: #9E9E9E;
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  .field__wrapper {
    border-image-source: linear-gradient(90deg, rgba(195, 162, 66, 0.5) 0%, rgba(244, 233, 149, 0.5) 100%,) !important;
    border-image-slice: 1;
    border-width: 1px;
    border-style: solid;

    &:hover {
      border-image-source: linear-gradient(90deg, rgba(195, 162, 66, 1) 0%, rgba(244, 233, 149, 1) 100%,) !important;
    }

    &:focus-within {
      border-image-source: linear-gradient(90deg, rgba(244, 233, 149, 1) 0%, rgba(195, 162, 66, 1) 100%) !important;
    }

    &-error {
      border: 1px solid #E27070;
    }
  }

  .custom-input {
    .v-input__control {
      background-color: rgba(0, 46, 33, 0.7);
      color: #A39162;

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

    //.v-label {
    //  color: rgba(250, 233, 126, 0.5); /* Колір для тексту підказки */
    //  padding-top: 4px;
    //  text-transform: uppercase;
    //  font-size: 15px;
    //  font-weight: 600;
    //  font-family: Josefin Sans, sans-serif;
    //}


    //.v-input__control:focus-within {
    //  border-image: linear-gradient(to right, #e3c28f, #e3c28f); /* Градієнт при фокусі */
    //  background-color: #2e4a35; /* Трохи світліший фон при фокусі */
    //}

    .v-input__control:disabled {
      border-image: linear-gradient(to right, #666, #999); /* Сірий градієнт при задізабленні */
      background-color: #1c2a21; /* Темніший фон */
      color: #666; /* Сірий колір тексту при задізабленні */
      cursor: not-allowed; /* Неактивний курсор */
    }
  }

}

</style>