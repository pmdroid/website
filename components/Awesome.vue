<template>
  <flip-card
    more-text="Discover my favorite frameworks"
    front-color="#f38a8a"
    more-text-color="#ffffff"
    front-is-centered
  >
    <template slot="front">
      <div>
        <i class="fas fa-code card-front-icon has-text-white"></i>
        <h1 class="title card-front-title has-text-white">Awesome</h1>
      </div>
    </template>
    <template slot="back">
      <a href="https://github.com/nestjs/nest" target="_blank"
        ><h1 class="title has-text-white">
          nest
          <span class="icon">
            <i class="fab fa-github has-text-white"></i>
          </span>
        </h1>
      </a>
      <h2 class="subtitle has-text-white">
        Nest is an amazing server framework, i use nest on all my microservices.
        One of the best next features is the dependency injection.
      </h2>

      <a href="https://github.com/typeorm/typeorm" target="_blank"
        ><h1 class="title has-text-white">
          typeorm
          <span class="icon">
            <i class="fab fa-github has-text-white"></i>
          </span>
        </h1>
      </a>
      <h2 class="subtitle has-text-white">
        Typeorm is a orm framework for typescript and javascript. The framework
        supports most of the popular databases.
      </h2>

      <a href="hhttps://github.com/vuejs/vue" target="_blank"
        ><h1 class="title has-text-white">
          Vue.js
          <span class="icon">
            <i class="fab fa-github has-text-white"></i>
          </span>
        </h1>
      </a>
      <h2 class="subtitle has-text-white">
        Vue.js is progressive framework for building user interfaces. When build
        user interfaces Vue.js is my go to framework.
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
