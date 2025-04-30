<template>
  <body>
    <Nav />
    <HeroSection />
    <AboutSection />
    <ProjectSection />
    <SkillsSection />
    <ContactSection />
    <Footer />
  </body>
</template>

<script>
import Nav from './components/Nav.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectSection from './components/ProjectSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import ContactSection from './components/ContactSection.vue';
import Footer from './components/Footer.vue';

  export default {
    name: "App",
    components: {
      Nav,
      HeroSection,
      AboutSection,
      ProjectSection,
      SkillsSection,
      ContactSection,
      Footer,
    },
  };
</script>

<style></style>
