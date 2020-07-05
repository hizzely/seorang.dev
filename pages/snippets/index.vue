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
          <SnippetCardList :snippets="snippets" />
          <div class="text-center mt-12">
            <a href="#" class="bg-white border shadow-md p-2 px-6 rounded-lg">
              {{ $t('snippets.btn.loadMore') }}
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import SnippetCardList from '~/components/SnippetCardList.vue'

  export default {
    components: {
      SnippetCardList
    },
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
