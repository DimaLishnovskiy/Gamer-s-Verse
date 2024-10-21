<script setup lang="ts">

</script>

<template>
  <div class="opt">
    <h2 class="text-yellow-josefin fs-18 font-weight-regular text-uppercase text-center mb-8">Or Leave An Email Inquiry</h2>
    <v-form>
      <v-text-field variant="outlined" required rounded="none" placeholder="Your email address"></v-text-field>
      <v-text-field variant="outlined"></v-text-field>
      <v-textarea variant="outlined"></v-textarea>
    </v-form>
  </div>
</template>

<style lang="scss">
.opt {
  .v-field {
    border-radius: 0;

    &--focused {
      outline: none;
    }

    &--active {
      color: transparent;
      background-image: linear-gradient(90deg, rgba(244,233,149,1) 0%, rgba(195,162,66,1) 100%);
      background-origin: border-box;
      background-clip: text;
      -webkit-background-clip: text;
    }

    input::placeholder {
      color: #FAE97E;
      text-transform: uppercase;
      opacity: 0.5;
    }

    .v-input {
      border-image-source: linear-gradient(rgba(0, 51, 102, 0.5), rgba(0, 0, 51, 0.5));
      border-width: 5pt;
      border-image-slice: 1;
    }
    .v-input, .v-field {
      &__control {
        background-color: green;
        border: green solid 1px !important;

      }
      &__input {
        color: green;
        border: green solid 1px !important;
      }
    }
  }
}

</style>