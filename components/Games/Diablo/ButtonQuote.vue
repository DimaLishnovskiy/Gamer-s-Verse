<script setup lang="ts">
  const handleQuote = () => {
    console.info('handle quote');
  }
</script>

<template>
  <div class="button-quote-wrapper" @click="handleQuote">
    <p class="diablo-font">GET QUOTE</p>
  </div>
</template>

<style scoped lang="scss">
  $image-width: 290px;
  $image-height: 85px;

  .button-quote-wrapper {
    cursor: pointer;
    width: $image-width;
    height: $image-height;
    background: url("/img/diablo/button.webp") no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;

    p {
      margin: 0;
      color: var(--text-color-title);
      font-size: 24px;
      font-weight: 500;
    }
  }
</style>
