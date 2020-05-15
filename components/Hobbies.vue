<template>
  <flip-card
    front-color="#f38a8a"
    back-color="#ffffff"
    front-is-centered
    back-is-centered
  >
    <template slot="front">
      <div>
        <h1 class="title title-hobbies has-text-white has-text-left">
          Hobbies:
        </h1>
        <h2 class="subtitle subtitle-hobbies has-text-white">
          Longboard riding, Sourdough Bread baking, Traveling
        </h2>
      </div>
    </template>
    <template slot="back">
      <div>
        <h1 class="title title-hobbies has-text-primary has-text-left">
          Hobbies:
        </h1>
        <h2 class="subtitle subtitle-hobbies has-text-primary">
          Longboard riding, Sourdough Bread baking, Traveling
        </h2>
      </div>
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
.title-hobbies {
  font-size: 60px;
}

.subtitle-hobbies {
  font-size: 40px;
}
</style>
