<template>
  <flip-card back-color="#f38a8a" front-is-centered back-is-centered>
    <template slot="front">
      <h1 class="title title-interests has-text-primary">
        I am interested in:
      </h1>
      <h2 class="subtitle subtitle-interests has-text-primary">
        NodeJS, ML, AI and video streaming
      </h2>
    </template>
    <template slot="back">
      <h1 class="title title-interests has-text-white">
        I am interested in:
      </h1>
      <h2 class="subtitle subtitle-interests has-text-white">
        NodeJS, ML, AI and video streaming
      </h2>
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
.title-interests {
  font-size: 60px;
}

.subtitle-interests {
  font-size: 40px;
}
</style>
