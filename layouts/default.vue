<template>
  <div>
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Navbar from '~/components/Navbar.vue'
  import Footer from '~/components/Footer.vue'

  export default Vue.extend({
    components: {
      Navbar,
      Footer
    }
  })
</script>
