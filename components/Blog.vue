<template>
  <flip-card
    more-text="Discover my projects"
    back-color="#f38a8a"
    more-text-color="#ffffff"
    front-is-centered
    back-is-centered
  >
    <template slot="front">
      <div>
        <i class="fas fa-blog card-front-icon has-text-primary"></i>
        <h1 class="title card-front-title has-text-primary">Blog</h1>
      </div>
    </template>
    <template slot="back">
      <h1 class="title has-text-white">Coming soon.....</h1>
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
