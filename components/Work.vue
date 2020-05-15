<template>
  <flip-card
    more-text="Discover my dream job"
    back-color="#f38a8a"
    more-text-color="#f38a8a"
    front-is-centered
  >
    <template slot="front">
      <div>
        <i class="fas fa-home card-front-icon has-text-primary"></i>
        <h1 class="title card-front-title has-text-primary">Work</h1>
      </div>
    </template>
    <template slot="back">
      <div class="work-item">
        <h1 class="title has-text-white">Node.js Backend Engineer</h1>
        <h2 class="subtitle has-text-white">
          <p>ottonova Munich, Germany</p>
          <p>September 2018 - June 2020</p>
        </h2>
        <p class="has-text-white">
          At ottonova I was focused on building and maintaining services built
          in NodeJS. During that time, I developed services for communication
          with external partners, services that are used in their mobile apps
          and frontend.
        </p>
      </div>
      <div class="work-item">
        <h1 class="title has-text-white">Javascript Engineer</h1>
        <h2 class="subtitle has-text-white">
          <p>Glomex Munich, Germany</p>
          <p>September 2017 - September 2018</p>
        </h2>
        <p class="has-text-white">
          At glomex, I focused on building and maintaining Javascript apps. Most
          of that time I developed and maintained a videoplayer. I also
          developed a adproxy system and registered a patent for this service.
        </p>
      </div>
      <div class="work-item">
        <h1 class="title has-text-white">Fullstack Developer</h1>
        <h2 class="subtitle has-text-white">
          <p>CHECK24 Munich, Germany</p>
          <p>Juli 2016 - September 2017</p>
        </h2>
        <p class="has-text-white">
          During my time at CHECK24, I was mostly building NodeJS microservices.
          Part of my job was also to create and maintain React applications.
        </p>
      </div>
      <div class="work-item">
        <h1 class="title has-text-white">Javascript Engineer</h1>
        <h2 class="subtitle has-text-white">
          <p>CHIP.de Munich, Germany</p>
          <p>February 2013 - Juli 2016</p>
        </h2>
        <p class="has-text-white">
          In my time as a Javascript Engineer at CHIP.de I was building and
          maintaining Javascript apps and developing NodeJS services. We also
          developed a Javascript framework for ad delivery.
        </p>
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
.work-item {
  padding-bottom: 20px;
}
</style>
