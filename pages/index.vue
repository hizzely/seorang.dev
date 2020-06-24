<template>
  <div>
    <div class="container mt-8 mx-auto px-8 md:px-0 lg:w-2/3 xl:max-w-3xl">
      <section id="hero">
        <h1 class="text-3xl font-semibold mb-2 text-center md:text-left">{{ $t('home.greet') }}</h1>
        <p class="text-lg font-light text-gray-900 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>

    <div class="mt-20" style="background-color: #fafafa">
      <div class="container mx-auto py-12 px-8 md:px-0 lg:w-2/3 xl:max-w-3xl space-y-16">
        <section id="snippets">
          <div id="writings-title" class="flex justify-between mb-6">
            <h2 class="text-lg font-semibold">Code Snippets</h2>
            <input class="w-1/3 border rounded-sm border-gray-400 text-center text-xs" name="search" placeholder="Cari Snippet...">
            <nuxt-link to="/snippets" class="inline-block text-xs px-4 py-1 rounded-md border border-gray-400">Semua Snippets</nuxt-link>
          </div>
          <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <nuxt-link :to="snippet.path" v-for="(snippet, i) in snippets" :key="i" class="md:w-1/3 h-32 bg-white shadow-md hover:shadow-lg border rounded-lg flex items-center justify-center">
              <div class="text-center p-4">
                <img class="inline-block w-8 mb-2" alt="Laravel" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/120px-Laravel.svg.png">
                <h3 class="text-sm">{{ snippet.title }}</h3>
              </div>
            </nuxt-link>
          </div>
        </section>

        <section id="writings">
          <div id="writings-title" class="flex justify-between mb-6">
            <h2 class="text-lg font-semibold">Belajar Nulis</h2>
            <nuxt-link to="/blog" class="inline-block text-xs px-4 py-1 rounded-md border border-gray-400">Semua Tulisan</nuxt-link>
          </div>
          <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div v-for="(post, i) in posts" :key="i" class="md:w-1/3 h-48 bg-white shadow-md hover:shadow-lg border rounded-lg flex items-center justify-center">
              <div class="text-center p-4">
                <h3 class="text-xl mb-4">{{ post.title }}</h3>
                <nuxt-link :to="post.path" class="inline-block text-xs px-4 py-1 rounded-md border border-gray-500">Selengkapnya</nuxt-link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const posts = await $content('blog')
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
    const snippets = await $content('snippets')
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()
    return { posts, snippets }
  }
}
</script>