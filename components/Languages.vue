<template>
  <flip-card more-text-color="#f38a8a" front-is-centered back-is-centered>
    <template slot="front">
      <h1 class="title title-languages">
        I speak German and English
      </h1>
    </template>
    <template slot="back">
      <h1 class="title title-languages has-text-white">
        I speak German and English
      </h1>
    </template>
  </flip-card>
</template>

<script lang="ts">
import FlipCard from '~/components/FlipCard.vue'

export default {
  components: {
    FlipCard
  }
}
</script>

<style>
.title-languages {
  font-size: 60px;
  color: #f38a8a;
}
</style>
