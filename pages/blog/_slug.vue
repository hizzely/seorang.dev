<template>
  <div>
    <div class="container my-8 mx-auto px-8 md:px-0 lg:w-2/3 xl:max-w-3xl">
      <nuxt-link to="/blog" class="inline-block mb-8 font-semibold">{{ $t('blogs.btn.back') }}</nuxt-link>
      <div id="post-header" class="mb-8">
        <span class="text-sm">{{ timePosted }} &bull; {{ readTime }}</span>
        <h1 class="text-4xl font-bold">{{ page.title }}</h1>
        <p class="text-lg">{{ page.description }}</p>
      </div>
      <nuxt-content :document="page"/>
    </div>
  </div>
</template>

<style>
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
    const getTimePosted = function () {
      let date = new Date(page.createdAt)
      let months = [
        'Januari', 'Februari', 'Maret',
        'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September',
        'Oktober', 'November', 'Desember'
      ]
      return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    }
    const getReadTime = function () {
      let words = ''
      let wordsPerMinute = 200 // average person reading speed
      try {
        page.body.children.forEach(child => {
          if (child.type === 'element') {
            child.children.forEach(innerChild => {
              words += innerChild.value
            })
          }
        })
      } catch (error) {
        console.error('Whoops, failed getting read time. Falling back...')
      }
      words = words.split(/\s/g).length
      return Math.ceil(words / wordsPerMinute) + ' menit baca'
    }

    return { page, readTime: getReadTime(), timePosted: getTimePosted() };
  }
};
</script>
