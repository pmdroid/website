<template>
  <flip-card
    more-text="Discover my patents"
    front-color="#f38a8a"
    more-text-color="#ffffff"
    front-is-centered
  >
    <template slot="front">
      <div>
        <i class="fas fa-book card-front-icon has-text-white"></i>
        <h1 class="title card-front-title has-text-white">Patents</h1>
      </div>
    </template>
    <template slot="back">
      <h1 class="title has-text-white">My Patents</h1>
      <p class="has-text-white">
        The present invention relates to a method for delivering advertising
        material from an advertising material server to a client device before,
        during or after the retrieval of media content from a CDN system,
        wherein the client device encrypts the destination address of the
        advertising material server and queries the CDN to query advertising
        material System in which the encrypted destination address of the
        advertising medium server is contained, and wherein the CDN system
        extracts the encrypted destination address from the request and decrypts
        it in order to retrieve advertising material from the addressed
        advertising medium server and to provide this to the client device.
      </p>
      <a
        class="button view-patent-button"
        target="_blank"
        href="https://patents.google.com/patent/EP3503007A1/en"
      >
        <span class="icon has-text-white">
          <i class="far fa-file-pdf"></i>
        </span>
        <span class="has-text-white">View Patent</span>
      </a>
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
.view-patent-button {
  background: transparent !important;
  margin-top: 10px;
  float: right;
}
</style>
