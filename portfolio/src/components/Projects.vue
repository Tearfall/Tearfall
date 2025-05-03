<template>
  <!-- Projects Section -->
  <section id="projects" class="max-w-6xl mx-auto py-24">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold">
        My Projects
      </h2>
      <div class="h-1 w-20 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-3 mb-6"></div>
      <p class="text-lg text-gray-300 max-w-2xl mx-auto">
        Here are some of my recent projects. Each one presented unique challenges that helped me grow as a developer.
      </p>
    </div>
    
    <!-- Project Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Project Card 1 -->
      <div class="bg-gray-800/40 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
        <div class="aspect-video rounded-lg overflow-hidden bg-gray-700 mb-4">
          <!-- Replace with actual project image -->
          <div class="h-full w-full flex items-center justify-center text-gray-500">Project Image</div>
        </div>
        <h3 class="text-xl font-semibold">E-commerce Website</h3>
        <p class="text-gray-400 mt-2">A fully responsive online store built with Vue.js and integrated with a headless CMS.</p>
        <div class="flex gap-2 mt-3">
          <span class="text-xs font-medium bg-gray-700 text-gray-300 px-2 py-1 rounded-full">Vue</span>
          <span class="text-xs font-medium bg-gray-700 text-gray-300 px-2 py-1 rounded-full">Tailwind</span>
          <span class="text-xs font-medium bg-gray-700 text-gray-300 px-2 py-1 rounded-full">Stripe</span>
        </div>
        <div class="mt-4 flex gap-3">
          <a href="#" class="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">View Live</a>
          <a href="#" class="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">Source Code</a>
        </div>
      </div>
      
      <!-- Project Card 2 -->
      <div class="bg-gray-800/40 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
        <div class="aspect-video rounded-lg overflow-hidden bg-gray-700 mb-4">
          <!-- Replace with actual project image -->
          <div class="h-full w-full flex items-center justify-center text-gray-500">Project Image</div>
        </div>
        <h3 class="text-xl font-semibold">Portfolio Dashboard</h3>
        <p class="text-gray-400 mt-2">A dashboard for tracking investments with real-time data visualization.</p>
        <div class="flex gap-2 mt-3">
          <span class="text-xs font-medium bg-gray-700 text-gray-300 px-2 py-1 rounded-full">React</span>
          <span class="text-xs font-medium bg-gray-700 text-gray-300 px-2 py-1 rounded-full">D3.js</span>
          <span class="text-xs font-medium bg-gray-700 text-gray-300 px-2 py-1 rounded-full">Firebase</span>
        </div>
        <div class="mt-4 flex gap-3">
          <a href="#" class="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">View Live</a>
          <a href="#" class="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">Source Code</a>
        </div>
      </div>
      
      <!-- Project Card 3 -->
      <div class="bg-gray-800/40 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
        <div class="aspect-video rounded-lg overflow-hidden bg-gray-700 mb-4">
          <!-- Replace with actual project image -->
          <div class="h-full w-full flex items-center justify-center text-gray-500">Project Image</div>
        </div>
        <h3 class="text-xl font-semibold">Task Management App</h3>
        <p class="text-gray-400 mt-2">A collaborative task manager with real-time updates and team features.</p>
        <div class="flex gap-2 mt-3">
          <span class="text-xs font-medium bg-gray-700 text-gray-300 px-2 py-1 rounded-full">Vue</span>
          <span class="text-xs font-medium bg-gray-700 text-gray-300 px-2 py-1 rounded-full">Node.js</span>
          <span class="text-xs font-medium bg-gray-700 text-gray-300 px-2 py-1 rounded-full">MongoDB</span>
        </div>
        <div class="mt-4 flex gap-3">
          <a href="#" class="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">View Live</a>
          <a href="#" class="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">Source Code</a>
        </div>
      </div>
    </div>
    
    <div class="text-center mt-12">
      <a href="#" class="py-3 px-6 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
        View All Projects
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // Existing data removed as the new structure doesn't use it
    };
  },
};
</script>