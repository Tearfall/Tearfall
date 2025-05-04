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
      <div v-for="(project, index) in projects" :key="index" class="bg-gray-800/40 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/20">
        <div class="aspect-video rounded-lg overflow-hidden bg-gray-700 mb-4">
          <!-- Replace with actual project image -->
          <img v-if="project" :src="project.image" alt="Project Image" class="w-full h-full object-cover" />
          <!-- Placeholder for project image, replace with actual image source -->
          <div v-else class="h-full w-full flex items-center justify-center text-gray-500">Project Image</div>
        </div>
        <h3 class="text-xl font-semibold">{{ project.title }}</h3>
        <p class="text-gray-400 mt-2">{{ project.description }}</p>
        <div class="flex gap-2 mt-3">
          <span  v-for="(item, index) in project.technologies" :key="index" class="text-xs font-medium bg-gray-700 text-gray-300 px-2 py-1 rounded-full">{{ item }}</span>
        </div>
        <div class="mt-4 flex gap-3">
          <a :href="project.liveLink" class="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">View Live</a>
          <a :href="project.sourceCodeLink" class="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">Source Code</a>
        </div>
      </div>
    </div>
    
    <!-- <div class="text-center mt-12">
      <a href="#" class="py-3 px-6 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium border border-gray-600 hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
        View All Projects
      </a>
    </div> -->
  </section>
</template>

<script>
import profileImage from "../assets/profile.jpg"; // Import your image here
export default {
  data() {
    return {
      projects: [
        {
          title: "Talos",
          description: "Data visualization and analytics platform for institution's strategic planning.",
          image: profileImage,
          technologies: ["Vue", "Javascript", "Tailwind", "Firebase"],
          liveLink: "#",
          sourceCodeLink: "#",
        },
        {
          title: "Nerdi",
          description: "A mobile studying tool for students with interactive flashcards and quizzes.",
          image: "path/to/image2.jpg",
          technologies: ["Android Studio", "Firebase"],
          liveLink: "#",
          sourceCodeLink: "#",
        },
        {
          title: "Promee",
          description: "A task management tool integrated with Kanban board and 3-2-1 productivity rule for improved self-productivity and project management.",
          image: "path/to/image3.jpg",
          technologies: ["Android Studio", "Firebase"],
          liveLink: "#",
          sourceCodeLink: "#",
        },
        {
          title: "Mitolohiya",
          description: "A mobile game based on Philippine Mythology.",
          image: "path/to/image3.jpg",
          technologies: ["Unity", "C#"], 
          liveLink: "#",
          sourceCodeLink: "#",
        },
      ],
    };
  },
};
</script>