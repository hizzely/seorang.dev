<template>
  <div>
    <div style="background-color: #fafafa">
      <div class="container mx-auto py-12 px-8 md:px-0 lg:w-2/3 xl:max-w-3xl space-y-16">
        <section id="snippets">
          <div id="snippet-title" class="flex justify-between items-baseline mb-6">
            <h2 class="text-2xl font-semibold">{{ $t('snippets.byTag') }} {{ tag }}</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <nuxt-link :to="snippet.path" v-for="(snippet, i) in snippets" :key="i" class="w-full h-40 bg-white shadow-md hover:shadow-lg border rounded-lg flex items-center">
              <div class="p-4">
                <h3 class="font-semibold">{{ snippet.title }}</h3>
                <p class="text-xs">{{ snippet.description }}</p>
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
      const snippets = await $content('snippets')
        .where({ 'tags': { $contains: params.id } })
        .fetch()
        .catch(err => {
          error({ statusCode: 404, message: "No snippet contains the tag" });
        });

      return { snippets, tag: params.id }
    }
  };
</script>
