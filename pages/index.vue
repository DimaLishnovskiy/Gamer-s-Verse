<script setup>
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "vue3-fullpage/styles";
import { Vue3Fullpage as FullPage } from 'vue3-fullpage';
import FirstSection from "~/components/FirstSection.vue";

</script>

<template>
  <ClientOnly>
    <FullPage hide-navigation>
      <section>
        <FirstSection />
      </section>
      <section>Page Two</section>
    </FullPage>
  </ClientOnly>
</template>
