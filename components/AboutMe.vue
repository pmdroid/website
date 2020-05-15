<template>
  <flip-card more-text="Read about me" front-is-centered>
    <template slot="front">
      <h1 class="title about-me-title has-text-centered">
        A summary of Pascal Matthiesen
      </h1>
      <h2 class="subtitle">
        <i class="fas fa-map-marker-alt"></i> Munich, Germany
      </h2>
    </template>
    <template slot="back">
      <h1 class="title has-text-white">Who?</h1>
      <p class="has-text-white">
        I am Pascal a Software Engineer that is passionate about learning new
        programming languages. I enjoy working in the backend and orchestrating
        servers as much as writing JavaScript. During my time as a Software
        Engineer, I mainly focused on engineering services based on Node.js.
      </p>
      <p class="has-text-white">
        I really enjoy working in a Team and in the Environment of an Office but
        sometimes it's nice to enjoy the quiet environment of home-office to
        completely focus on a task.
      </p>
      <p class="has-text-white">
        During development, I love to do pair programming and plan as a Team the
        next steps of a system.
      </p>
      <p></p>
      <br />
      <h1 class="title has-text-white">Work experience</h1>
      <p class="has-text-white">
        In the past 7 years, I've worked in different types of companies, from
        Digital Magazines, Video Streaming, and Health Care. Which gave me a
        great understanding of how different companies work.
      </p>
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
.about-me-title {
  font-size: 60px !important;
}
</style>
