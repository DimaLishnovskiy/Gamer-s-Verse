<script setup lang="ts">

import Footer from "~/components/Footer.vue";
import Contact from "~/components/Contact.vue";
</script>

<template>
  <v-app class="bg-transparent">
    <Header />
    <v-main>
      <NuxtPage/>
    </v-main>
    <Contact v-if="$route.name !== 'contact-us'"/>
    <Footer v-if="$route.name !== 'contact-us'"/>
  </v-app>
</template>

