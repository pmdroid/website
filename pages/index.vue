<template>
  <div class="columns is-centered">
    <div class="column is-one-third-widescreen is-half-tablet">
      <about-me />
    </div>
    <div class="column is-one-third-widescreen is-half-tablet">
      <skills />
    </div>
    <div class="column is-one-third-widescreen is-half-tablet">
      <work />
    </div>
    <div class="column is-one-third-widescreen is-half-tablet">
      <patents />
    </div>
    <div class="column is-one-third-widescreen is-half-tablet">
      <languages />
    </div>
    <div class="column is-one-third-widescreen is-half-tablet">
      <interests />
    </div>
    <div class="column is-one-third-widescreen is-half-tablet">
      <awesome />
    </div>
    <div class="column is-one-third-widescreen is-half-tablet">
      <github />
    </div>
    <div class="column is-one-third-widescreen is-half-tablet">
      <hobbies />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AboutMe from '~/components/AboutMe.vue'
import Skills from '~/components/TechStack.vue'
import Work from '~/components/Work.vue'
import Patents from '~/components/Patents.vue'
import Languages from '~/components/Languages.vue'
import Interests from '~/components/Interests.vue'
import Awesome from '~/components/Awesome.vue'
import Github from '~/components/Blog.vue'
import Hobbies from '~/components/Hobbies.vue'

export default Vue.extend({
  components: {
    AboutMe,
    Skills,
    Work,
    Patents,
    Languages,
    Interests,
    Awesome,
    Hobbies,
    Github
  }
})
</script>

<style>
.columns {
  flex-wrap: wrap;
}
</style>
