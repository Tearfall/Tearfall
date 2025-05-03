Projects.vue
<template>
  <section id="projects" class="max-w-6xl mx-auto py-16 px-4">
    <h2 class="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">My Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="project in projects" :key="project.id" class="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:shadow-lg transition-all duration-300">
        <img :src="project.image" :alt="project.title" class="rounded-lg shadow-lg mb-4" />
        <h3 class="text-xl font-semibold text-gray-100 mb-2">{{ project.title }}</h3>
        <p class="text-gray-300 text-sm">{{ project.description }}</p>
        <div class="mt-4">
          <a :href="project.link" target="_blank" class="py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">View Project</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        projects: [
          {
            id: 1,
            title: "Portfolio Website",
            description: "A personal portfolio website to showcase my work and skills.",
            image: "https://via.placeholder.com/300x200",
            link: "#",
          },
          {
            id: 2,
            title: "E-commerce App",
            description: "A fully functional e-commerce application with a shopping cart.",
            image: "https://via.placeholder.com/300x200",
            link: "#",
          },
          {
            id: 3,
            title: "Blog Platform",
            description: "A blog platform where users can create and share posts.",
            image: "https://via.placeholder.com/300x200",
            link: "#",
          },
        ],
      };
    },
  };
</script>
