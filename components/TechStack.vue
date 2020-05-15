<template>
  <flip-card
    more-text="Learn more about my skills"
    front-color="#f38a8a"
    back-color="#f38a8a"
    more-text-color="#FFFFFF"
    front-is-centered
  >
    <template slot="front">
      <div class="has-text-centered">
        <img src="~/assets/nodejs.svg" class="tech-stack-image" />
        <h1 class="title card-front-title has-text-white">Tech Stack</h1>
      </div>
    </template>
    <template slot="back">
      <div class="tech-stack">
        <h1 class="title has-text-white">My Tech Stack</h1>
        <div class="tags">
          <span class="tag is-medium is-primary is-light">Node.js</span>
          <span class="tag is-medium is-primary is-light">JavaScript</span>
          <span class="tag is-medium is-primary is-light">TypeScript</span>
          <span class="tag is-medium is-primary is-light">AWS</span>
          <span class="tag is-medium is-primary is-light">Postgres</span>
          <span class="tag is-medium is-primary is-light">MongoDB</span>
          <span class="tag is-medium is-primary is-light">Python</span>
          <span class="tag is-medium is-primary is-light">PHP</span>
          <span class="tag is-medium is-primary is-light">GO</span>
        </div>
        <p class="has-text-white">
          I focused mostly and Node.js and TypeScript. I've mostly developed
          MicroServices based on Nest.js and Express.js. When working with these
          Services I used different Databases like Postgres, MongoDB, and
          Elasticsearch. My work not ended there, most of the time I also
          developed and implemented the Continues Deployment Chain. When working
          with deployments and infrastructure I used Jenkins to build dockerized
          versions of the MicroServices. The dockerized versions then were
          deployed to AWS or Google Cloud, orchestration of the Infrastructure I
          always did with Terraform.
        </p>
        <p class="has-text-white">
          Sometimes I also worked with different languages like PHP, Python, or
          Go. These where mostly small changes on Legacy Codebases or small
          projects.
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
.tech-stack {
  padding-top: 10px;
}

.tech-stack p {
  padding-top: 10px;
}

.tech-stack-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 200px;
}
</style>
