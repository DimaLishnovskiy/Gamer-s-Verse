<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { useRoute } from 'vue-router';

const route = useRoute();

useHead(() => ({
  bodyAttrs: {
    class: route.path.startsWith('/games') ? 'body-games' : '',
  },
}));
</script>

<template>
  <v-app class="bg-transparent">
    <Header v-if="false"/>
    <v-main>
      <NuxtPage/>
    </v-main>
  </v-app>
</template>

