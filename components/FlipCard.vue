<template>
  <div
    class="card flip-card has-rounded-corner"
    v-on:mouseover="show"
    v-on:mouseleave="hide"
  >
    <div
      class="card-content"
      :class="{
        animated: animate,
        fadeIn: !showBack,
        fadeOut: showBack,
        'card-content-centered': frontIsCentered
      }"
      :style="{ 'background-color': frontColor }"
    >
      <slot name="front" />
      <div
        v-if="moreText"
        class="read-more"
        :style="{ opacity: showBack ? 0 : 1, color: moreTextColor }"
      >
        {{ moreText }}&nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
      </div>
    </div>

    <div
      class="card-content is-overlay"
      style="opacity: 0; overflow-y: scroll;"
      :style="{ 'background-color': backColor }"
      :class="{
        animated: animate,
        fadeIn: showBack,
        fadeOut: !showBack,
        'card-content-centered': backIsCentered
      }"
    >
      <slot name="back" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    moreText: {
      type: String
    },
    frontColor: {
      type: String,
      default: (): string => '#FFFFFF'
    },
    backColor: {
      type: String,
      default: (): string => '#f38a8a'
    },
    moreTextColor: {
      type: String,
      default: (): string => ''
    },
    defaultBack: {
      type: Boolean,
      default: (): boolean => false
    },
    frontIsCentered: {
      type: Boolean,
      default: (): boolean => false
    },
    backIsCentered: {
      type: Boolean,
      default: (): boolean => false
    }
  },
  data: () => ({ animate: false, showBack: false }),
  mounted() {
    if (this.defaultBack) {
      this.animate = true;
      this.showBack = this.defaultBack;
    }
  },
  methods: {
    show() {
      this.animate = true;
      this.showBack = true;
    },
    hide() {
      this.showBack = false;
    }
  }
});
</script>

<style>
.flip-card {
  padding-top: 100%;
  overflow: hidden;
}

.card-front-icon {
  font-size: 200px;
  width: 100%;
  text-align: center;
}

.card-front-title {
  font-size: 60px;
  text-align: center;
}

.card-content {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 2rem;
  flex-wrap: wrap;
}

.card-content-centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-content::-webkit-scrollbar-track {
  border: 0;
}
.card-content::-webkit-scrollbar {
  height: 6px;
}
.card-content::-webkit-scrollbar-thumb {
  background-color: #7d3434;
}

.read-more {
  right: 14px;
  bottom: 10px;
  display: flex;
  position: absolute;
  align-items: center;
}
</style>
