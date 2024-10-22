<script setup lang="ts">
const display = ref(useDisplay())

const form = ref(false)
</script>

<template>
  <h2 class="text-yellow-josefin fs-18 font-weight-regular text-uppercase text-center mb-6 mb-sm-8">Or Leave An Email Inquiry</h2>
  <v-form v-model="form" class="bg-transparent">
    <div class="field__wrapper mb-4">
      <v-text-field placeholder="Your Email Address" required :rules="[(v: any) => !!v || 'Email is required', (v: any) => (v && /.+@.+\..+/.test(v)) || 'Email is required']" variant="plain" type="text" hide-details class="custom-input" rounded="0">
        <template v-slot:message="{ message }">
          error
        </template>
      </v-text-field>
    </div>
    <div class="field__wrapper mb-4">
      <v-text-field placeholder="write your game" variant="plain" type="text" hide-details class="custom-input" rounded="0"></v-text-field>
    </div>
    <v-sheet class="field__wrapper mb-10 bg-transparent" >
      <v-textarea :rows="display.smAndUp ? 7 : 9" placeholder="YOUR REQUEST" variant="plain" type="text" hide-details class="custom-input h-100" rounded="0"></v-textarea>
    </v-sheet>
    <div class="d-flex justify-center justify-sm-end">
      <v-btn type="submit" class="custom-button title lh-1 pt-1" size="x-large" height="64" :width="display.smAndUp ? 239 : 294" >
        Send Request
      </v-btn>
    </div>
  </v-form>
</template>

<style lang="scss">
.opt {
  .custom-button {
    color: black;
    background-image: url('/gold_button_bg.png'); /* Шлях до вашого фонового зображення */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100px;
    font-weight: 600 !important;
  }

  .custom-button:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
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
  }

  .custom-input {
    .v-input__control {
      background-color: rgba(0, 46, 33, 0.7); /* Темний фон */
      color: #A39162; /* Золотистий колір тексту */

      &:hover {
        color: #FAE97E;
        opacity: 1;

        input::placeholder {
          color: #FAE97E;
          opacity: 1;
        }
      }

      &:focus-within {
        color: #FAE97E;
        opacity: 1;
      }

      &:focus-within {
        border-image: linear-gradient(90deg, rgba(195, 162, 66, 0.5) 0%, rgba(244, 233, 149, 1) 100%) !important;
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

        &::placeholder {
          color: rgba(250, 233, 126, 0.5); /* Колір для тексту підказки */
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
          color: rgba(250, 233, 126, 0.5); /* Колір для тексту підказки */
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