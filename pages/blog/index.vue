<template>
  <div>
    <div style="background-color: #fafafa">
      <div class="container mx-auto py-12 px-8 md:px-0 lg:w-2/3 xl:max-w-3xl space-y-16">
        <section id="snippets">
          <div id="writings-title" class="flex justify-between items-baseline mb-6">
            <h2 class="text-2xl font-semibold">{{ $t('blogs.pageTitle') }}</h2>
          </div>
          <div class="flex space-x-2 mb-6">
            <nuxt-link :to="'/blog/tag/' + tag" v-for="(tag, i) in tags" :key="i" class="bg-white border shadow-sm rounded-full flex items-center justify-center">
              <span class="text-xs text-center py-1 px-3">{{ tag }}</span>
            </nuxt-link>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <nuxt-link :to="post.path" v-for="(post, i) in posts" :key="i" class="w-full h-40 bg-white shadow-md hover:shadow-lg border rounded-lg flex items-center">
              <div class="p-4">
                <h3 class="font-semibold">{{ post.title }}</h3>
                <p class="text-xs">{{ post.description }}</p>
              </div>
            </nuxt-link>
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
        .only(['title', 'description', 'path', 'tags'])
        .fetch()
      const tags = new Set()
      posts.map(post => {
        post.tags.forEach(tag => {
          tags.add(tag)
        })
      })
      
      return { posts, tags };
    }
  };
</script>
