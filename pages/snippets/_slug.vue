<template>
  <div>
    <div class="container my-8 mx-auto px-8 md:px-0 lg:w-2/3 xl:max-w-3xl">
      <div id="post-header" class="mb-8">
        <h1 class="text-3xl font-bold">{{ snippet.title }}</h1>
        <p class="text-sm">{{ snippet.description }}</p>
      </div>
      <nuxt-content :document="snippet"/>
    </div>
  </div>
</template>

<style scoped>
  .nuxt-content h1, h2 {
    font-weight: 600;
  }
  .nuxt-content h1 {
    font-size: 1.5rem;
  }
  .nuxt-content h2 {
    font-size: 1.25rem;
  }
</style>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug || "index";
    const snippet = await $content('snippets', slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Snippet not found" });
      });

    return { snippet };
  }
};
</script>
