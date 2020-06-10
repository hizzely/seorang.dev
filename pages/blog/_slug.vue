<template>
  <div>
    <div class="container my-8 mx-auto px-8 md:px-0 lg:w-2/3 xl:max-w-3xl">
      <nuxt-link to="/blog" class="inline-block mb-8 font-semibold">Kembali</nuxt-link>
      <div id="post-header" class="mb-8">
        <span class="text-sm">Diposting pada: {{ page.createdAt }}</span>
        <h1 class="text-3xl font-bold">{{ page.title }}</h1>
        <p class="text-sm">{{ page.description }}</p>
      </div>
      <nuxt-content :document="page"/>
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
    const page = await $content('blog', slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return { page };
  }
};
</script>
