<template>
  <div>
    <div class="container mt-8 mx-auto px-8 md:px-0 lg:w-2/3 xl:max-w-3xl">
      <section id="hero">
        <h1 class="text-3xl font-semibold mb-2 text-center md:text-left">{{ $t('home.greet') }}</h1>
        <p class="text-lg font-light text-gray-900 text-justify">{{ $t('home.intro') }}</p>
      </section>
    </div>

    <div class="mt-20" style="background-color: #fafafa">
      <div class="container mx-auto py-12 px-8 md:px-0 lg:w-2/3 xl:max-w-3xl space-y-16">
        <section id="snippets">
          <div id="writings-title" class="flex justify-between mb-6">
            <h2 class="text-lg font-semibold">{{ $t('snippets.pageTitle') }}</h2>
            <nuxt-link to="/snippets" class="inline-block text-xs px-4 py-1 rounded-md border border-gray-400">{{ $t('snippets.btn.all') }}</nuxt-link>
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
            <h2 class="text-lg font-semibold">{{ $t('blogs.pageTitle') }}</h2>
            <nuxt-link to="/blog" class="inline-block text-xs px-4 py-1 rounded-md border border-gray-400">{{ $t('blogs.btn.all') }}</nuxt-link>
          </div>
          <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div v-for="(post, i) in posts" :key="i" class="md:w-1/3 h-48 bg-white shadow-md hover:shadow-lg border rounded-lg flex items-center justify-center">
              <div class="text-center p-4">
                <h3 class="text-xl mb-4">{{ post.title }}</h3>
                <nuxt-link :to="post.path" class="inline-block text-xs px-4 py-1 rounded-md border border-gray-500">{{ $t('blogs.btn.readMore') }}</nuxt-link>
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