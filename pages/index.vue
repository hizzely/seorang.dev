<template>
  <div>
    <div class="container mt-8 mx-auto px-8 md:px-0 lg:w-2/3 xl:max-w-3xl">
      <section id="hero">
        <h1 class="text-3xl font-semibold mb-2 text-center md:text-left">Hai, Rohmad Disini.</h1>
        <p class="text-lg font-normal text-gray-700 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>

    <div class="mt-20" style="background-color: #fafafa">
      <div class="container mx-auto py-12 px-8 md:px-0 lg:w-2/3 xl:max-w-3xl space-y-16">
        <section id="snippets">
          <div id="writings-title" class="flex justify-between mb-6">
            <h2 class="text-lg font-semibold">Code Snippets</h2>
            <input class="w-1/3 border rounded-sm border-gray-400 text-center text-xs" name="search" placeholder="Cari Snippet...">
            <a href="#" class="inline-block text-xs px-4 py-1 rounded-md border border-gray-400">Semua Snippets</a>
          </div>
          <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <a href="#" v-for="i in 3" :key="i" class="h-32 bg-white shadow-md hover:shadow-lg border rounded-lg inline-block flex items-center justify-center">
              <div class="text-center p-4">
                <img class="inline-block w-8 mb-2" alt="Laravel" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/120px-Laravel.svg.png">
                <h3 class="text-sm">It Must Be Something That Just Like This</h3>
              </div>
            </a>
          </div>
        </section>

        <section id="writings">
          <div id="writings-title" class="flex justify-between mb-6">
            <h2 class="text-lg font-semibold">Belajar Nulis</h2>
            <a href="#" class="inline-block text-xs px-4 py-1 rounded-md border border-gray-400">Semua Tulisan</a>
          </div>
          <div class="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div v-for="i in 3" :key="i" class="h-48 bg-white shadow-md hover:shadow-lg border rounded-lg inline-block flex items-center justify-center">
              <div class="text-center p-4">
                <h3 class="text-xl mb-4">It Must Be Something Just Like This</h3>
                <a href="#" class="inline-block text-xs px-4 py-1 rounded-md border border-gray-500">Selengkapnya</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <footer class="container text-center text-sm mx-auto p-8 px-8 md:px-0 lg:w-2/3 xl:max-w-3xl">
      <div class="space-x-2 mb-4">
        <a href="mailto:bukan@seorang.dev" target="_blank"><img class="w-8 opacity-50 inline-block" alt="Email" src="https://www.iconninja.com/files/141/940/985/gmail-icon.svg"></a>
        <a href="https://linkedin.com/in/rfajar" target="_blank"><img class="w-8 opacity-50 inline-block" alt="LinkedIn" src="https://www.iconninja.com/files/614/682/533/linkedin-icon.svg"></a>
        <a href="https://github.com/hizzely" target="_blank"><img class="w-8 opacity-50 inline-block" alt="GitHub" src="https://www.iconninja.com/files/155/576/1004/github-icon.svg"></a>
        <a href="https://instagram.com/hizzely" target="_blank"><img class="w-8 opacity-50 inline-block" alt="Instagram" src="https://www.iconninja.com/files/757/387/759/instagram-icon.svg"></a>
        <a href="https://hoobist.com/youtube" target="_blank"><img class="w-8 opacity-50 inline-block" alt="Youtube" src="https://www.iconninja.com/files/92/645/294/youtube-icon.svg"></a>
      </div>
      <span class="text-gray-600">&copy; 2020 <span class="font-semibold">Rohmad Fajarudin</span>. Built with Nuxt.js &amp; Tailwind.</span>
    </footer>


  </div>
</template>