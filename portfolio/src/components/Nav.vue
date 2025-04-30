<template>
  <nav>
    <div class="nav-container">
      <div class="logo">YourName</div>
      <ul class="nav-links" :class="{active: isMenuActive}">
        <li v-for="link in navLinks" :key="link.href">
          <a :href="link.href" :class="{active: activeSection === link.href.substring(1)}" @click="handleSmoothScroll(link.href)">
            {{ link.text }}
          </a>
        </li>
      </ul>
      <div class="hamburger" :class="{active: isMenuActive}" @click="toggleMenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    </div>
  </nav>
</template>

<script>
  import {useNavigation} from "../composables/useNavigation";

  export default {
    name: "Nav",
    setup() {
      const {isMenuActive, toggleMenu, handleSmoothScroll, activeSection} = useNavigation();

      const navLinks = [
        {href: "#home", text: "Home"},
        {href: "#about", text: "About"},
        {href: "#projects", text: "Projects"},
        {href: "#skills", text: "Skills"},
        {href: "#contact", text: "Contact"},
      ];

      return {
        isMenuActive,
        toggleMenu,
        handleSmoothScroll,
        activeSection,
        navLinks,
      };
    },
  };
</script>
