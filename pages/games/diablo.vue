<script setup lang="ts">
import "vue3-fullpage/styles";
import { Vue3Fullpage as FullPage } from 'vue3-fullpage';

import FirstSection from "@/components/Games/Diablo/FirstSection.vue";
import SecondSection from "@/components/Games/Diablo/SecondSection.vue";
import ThirdSection from "@/components/Games/Diablo/ThirdSection.vue";
import ForthSection from "@/components/Games/Diablo/ForthSection.vue";
import FifthSection from "@/components/Games/Diablo/FifthSection.vue";
import SixthSection from "@/components/Games/Diablo/SixthSection.vue";
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
        <ThirdSection />
      </section>
      <section>
        <ForthSection />
      </section>
      <section>
        <FifthSection />
      </section>
      <section>
        <SixthSection />
      </section>
    </FullPage>
  </ClientOnly>
</template>

<style scoped lang="scss">

</style>
