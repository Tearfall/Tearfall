<template>
  <!-- About Section -->
  <section id="about" class="max-w-6xl mx-auto py-24">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Profile Image Area -->
      <div class="flex justify-center items-center">
        <div class="relative">
          <!-- Background element for visual interest -->
          <div class="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-xl opacity-30 scale-110"></div>
          <!-- Border glow effect -->
          <div class="relative rounded-full overflow-hidden border-4 border-gray-700 shadow-lg h-64 w-64 md:h-80 md:w-80">
            <img src="@/assets/profile.jpg" alt="Joar's profile picture" class="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <!-- About Content -->
      <div class="space-y-6">
        <h2 class="text-3xl md:text-4xl font-bold relative">
          About Me
          <div class="h-1 w-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-3"></div>
        </h2>
        <p class="text-lg text-gray-300 leading-relaxed">
          I am a web developer with a passion for creating beautiful and functional websites.
          I am a soon-to-graduate computer science student with a strong foundation in programming and web development. <br /><br />
          I have experience in building responsive and user-friendly websites using modern technologies. <br />
          During my academic career, I specialized in front-end development and UI/UX design. 
          While this remains my primary strength, I'm actively expanding my skills into backend development to become a more versatile developer. <br /><br />
          My goal is to create seamless user experiences that are both functional and visually appealing. 
        </p>

        <!-- Skills bars -->
        <!-- <div class="space-y-4 pt-4">
          <h3 class="text-xl font-semibold">Skills</h3>
          <div class="space-y-3">
            <div>
              <div class="flex justify-between mb-1">
                <span>Frontend Development</span>
                <span>90%</span>
              </div>
              <div class="h-2 bg-gray-700 rounded-full">
                <div class="h-full w-11/12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>UI/UX Design</span>
                <span>85%</span>
              </div>
              <div class="h-2 bg-gray-700 rounded-full">
                <div class="h-full w-5/6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between mb-1">
                <span>Backend Development</span>
                <span>75%</span>
              </div>
              <div class="h-2 bg-gray-700 rounded-full">
                <div class="h-full w-3/4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div> -->

        <a href="#contact" class="py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block mt-4" @click.prevent="$emit('scroll-to', 'contact')">Let's work together</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    setup() {
      const BODYTEXT = ``;

      return {
        BODYTEXT,
      };
    },
  };
</script>
