<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <nuxt-link :to="snippet.path" v-for="(snippet, index) in snippets" :key="index" class="w-full h-32 bg-white shadow-md hover:shadow-lg border rounded-lg flex items-center justify-center">
      <div class="text-center p-4">
        <img class="inline-block w-8 mb-2" :src="snippet.icon">
        <h3 class="text-sm">{{ snippet.title }}</h3>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'

  interface SnippetPreviewResource {
    title: string,
    icon: string,
    path: string
  }

  interface SnippetPreviewCollection {
    [index: number]: SnippetPreviewResource 
  }

  export default Vue.extend({
    name: 'SnippetCardList',
    props: {
      snippets: { 
        type: Array, 
        required: true 
      } as PropOptions<SnippetPreviewCollection>
    }
  })
</script>