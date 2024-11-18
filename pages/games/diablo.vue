<script setup lang="ts">
import "vue3-fullpage/styles";
import { Vue3Fullpage as FullPage } from 'vue3-fullpage';
import FirstSection from "@/components/Games/Diablo/FirstSection.vue";
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

<style scoped lang="scss">

</style>
