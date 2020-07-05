<template>
  <nav class="bg-white" role="navigation">
    <div class="container py-8 mx-auto px-8 md:px-0 lg:w-2/3 xl:max-w-3xl flex flex-wrap items-center justify-between">
      <div id="navbar-brand" class="mr-4 mb-4 text-center w-full block md:mb-0 md:text-left md:w-auto md:inline-block">
        <nuxt-link to="/">
          <img src="https://avatars3.githubusercontent.com/u/24291960?s=64" class="inline-block w-8 rounded-full mr-1">
          <span class="text-lg text-gray-700 font-bold align-middle">{{ $t('brand') }}</span>
        </nuxt-link>
      </div>
      <div class="text-gray-700 font-semibold text-center w-full block md:text-left md:w-auto md:inline-block">
        <nuxt-link to="/about" class="px-4">{{ $t('about.menu') }}</nuxt-link>
        <nuxt-link to="/snippets" class="px-4">{{ $t('snippets.menu') }}</nuxt-link>
        <nuxt-link to="/blog" class="px-4">{{ $t('blogs.menu') }}</nuxt-link>
        <a href="https://linkedin.com/in/rfajar" class="px-4 border border-gray-400 rounded-md py-1">{{ $t('portfolio.menu') }}</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'Navbar'
  })
</script>