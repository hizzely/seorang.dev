<template>
  <div>
    <div class="container mx-auto py-12 px-8 md:px-0 lg:w-2/3 xl:max-w-3xl">
      <h1 class="text-2xl font-semibold mb-6">{{ data.title }}</h1>
      <nuxt-content :document="data"/>
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
    const data = await $content('about', 'index')
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Data not found" });
      });

    return { data };
  }
};
</script>