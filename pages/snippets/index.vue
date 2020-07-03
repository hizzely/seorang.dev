<template>
  <div>
    <div style="background-color: #fafafa">
      <div class="container mx-auto py-12 px-8 md:px-0 lg:w-2/3 xl:max-w-3xl space-y-16">
        <section id="snippets">
          <div id="writings-title" class="flex justify-between items-baseline mb-6">
            <h2 class="text-2xl font-semibold">{{ $t('snippets.pageTitle') }}</h2>
            <input class="w-1/2 h-6 border rounded-sm border-gray-400 text-center text-xs" name="search" :placeholder="$t('snippets.search')">
          </div>
          <div class="flex space-x-2 mb-6">
            <nuxt-link :to="'/snippets/tag/' + tag" v-for="(tag, i) in tags" :key="i" class="bg-white border shadow-sm rounded-full flex items-center justify-center">
              <span class="text-xs text-center py-1 px-3">{{ tag }}</span>
            </nuxt-link>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <nuxt-link :to="snippet.path" v-for="(snippet, index) in snippets" :key="index" class="w-full h-32 bg-white shadow-md hover:shadow-lg border rounded-lg flex items-center justify-center">
              <div class="text-center p-4">
                <img class="inline-block w-8 mb-2" :src="snippet.icon">
                <h3 class="text-sm">{{ snippet.title }}</h3>
              </div>
            </nuxt-link>
          </div>
          <div class="text-center mt-12">
            <a href="#" class="bg-white border shadow-md p-2 px-6 rounded-lg">{{ $t('snippets.btn.loadMore') }}</a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params, error }) {
      const snippets = await $content('snippets')
        .only(['title', 'icon', 'description', 'path', 'tags'])
        .fetch()
      const tags = new Set()
      snippets.map(snippet => {
        snippet.tags.forEach(tag => {
          tags.add(tag)
        })
      })

      return { snippets, tags };
    }
  };
</script>
