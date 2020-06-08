<template>
  <div>
    <div style="background-color: #fafafa">
      <div class="container mx-auto py-12 px-8 md:px-0 lg:w-2/3 xl:max-w-3xl space-y-16">
        <section id="snippets">
          <div id="writings-title" class="flex justify-between items-baseline mb-6">
            <h2 class="text-2xl font-semibold">Code Snippets</h2>
            <input class="w-1/2 h-6 border rounded-sm border-gray-400 text-center text-xs" name="search" placeholder="Cari Snippet...">
          </div>
          <div class="flex space-x-2 mb-6">
            <a href="#" v-for="i in 3" :key="i" class="bg-white border shadow-sm rounded-full inline-block flex items-center justify-center">
              <span class="text-xs text-center py-1 px-3">Some Tags</span>
            </a>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a href="#" v-for="i in 15" :key="i" class="w-full h-32 bg-white shadow-md hover:shadow-lg border rounded-lg inline-block flex items-center justify-center">
              <div class="text-center p-4">
                <img class="inline-block w-8 mb-2" alt="Laravel" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/120px-Laravel.svg.png">
                <h3 class="text-sm">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</h3>
              </div>
            </a>
          </div>
          <div class="text-center mt-12">
            <a href="#" class="bg-white border shadow-md p-2 px-6 rounded-lg">Muat Lebih Banyak</a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
