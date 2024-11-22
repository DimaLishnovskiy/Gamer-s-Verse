<script setup lang="ts">
</script>

<template>
  <div class="content-wrapper h-100 mt-10">
    <div class="second-section-content-wrapper h-100">
      <div>
        <h1 class="title-section title-text ml-3 mb-8">Process</h1>
        <div class="step completed">
          <div class="v-stepper">
            <div class="circle"></div>
            <div class="line"></div>
          </div>
          <div class="content">
            <p class="description-text"><span class="warning-text">send</span> your inquiry</p>
          </div>
        </div>
        <div class="step completed">
          <div class="v-stepper">
            <div class="circle"></div>
            <div class="line"></div>
          </div>
          <div class="content">
            <p class="description-text">sales team will get in touch with you</p>
          </div>
        </div>
        <div class="step completed">
          <div class="v-stepper">
            <div class="circle"></div>
            <div class="line"></div>
          </div>
          <div class="content">
            <p class="description-text">if you agree with proposal, place your order</p>
          </div>
        </div>
        <div class="step completed">
          <div class="v-stepper">
            <div class="circle"></div>
            <div class="line"></div>
          </div>
          <div class="content">
            <p class="description-text">enjoy <span class="warning-text">xp</span> gains while you sleep</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/mixins';
@import '@/assets/games';

.content-wrapper {
  @include base-first-section('/img/diablo/forth-section-background.webp');
}

.second-section-content-wrapper {
  @extend .base-content-wrapper;
  align-items: flex-end;
}

.title-section {
  @extend .base-title-section;
  @include between("xxs", "lg") {
    margin: 0 auto;
  }
}

.step {
  height: 110px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .circle {
    background-color: white;
    border: 3px solid gray;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    display: inline-block;
  }

  .line {
    top: 20px;
    left: 9px;
    height: 100%;
    position: absolute;
    border-left: 3px solid gray;
  }

  &.completed {
    .circle {
      visibility: visible;
      background-color: white;
      border-color: white;
    }

    .line {
      border-left: 2px solid white;
    }
  }


  &:last-child {
    .line {
      border-left: 3px solid white;
      z-index: -1;
    }
  }
}

.v-stepper {
  position: relative;
  top: 7px;
}

.content {
  margin-left: 50px;
  text-transform: uppercase;
  display: inline-block;
}
</style>
