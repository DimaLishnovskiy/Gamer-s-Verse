<script setup lang="ts">
import "vue3-fullpage/styles";
import { Vue3Fullpage as FullPage } from 'vue3-fullpage';

import FirstSection from "@/components/Games/Diablo/FirstSection.vue";
import SecondSection from "@/components/Games/Diablo/SecondSection.vue";
</script>

<template>
  <ClientOnly>
    <FullPage hide-navigation>
      <section>
        <FirstSection />
      </section>
      <section>
        <SecondSection />
      </section>
      <section>
        <LazyGamesDiabloThirdSection />
      </section>
      <section>
        <LazyGamesDiabloForthSection />
      </section>
      <section>
        <LazyGamesDiabloFifthSection />
      </section>
      <section>
        <LazyGamesDiabloSixthSection />
      </section>
      <section>
        <LazyGamesDiabloSevenSection />
      </section>
      <section>
        <LazyGamesDiabloEightSection />
      </section>
    </FullPage>
  </ClientOnly>
</template>

<style scoped lang="scss">

</style>
