<template>
  <div class="has-background-grey-lighter">
    <hero-info></hero-info>
    <div class="container has-top-padding has-bottom-padding">
      <nuxt />
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Made</strong> by Pascal Matthiesen with
          <a href="https://github.com/pmdroid/website"
            ><img src="~/assets/icon.svg" width="16px"
          /></a>
          in Munich
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import HeroInfo from '~/components/HeroInfo.vue';

export default {
  components: { HeroInfo }
};
</script>
