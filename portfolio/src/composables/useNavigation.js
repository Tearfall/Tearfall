import {ref, onMounted, onUnmounted} from "vue";

export function useNavigation() {
  const isMenuActive = ref(false);

  const toggleMenu = () => {
    isMenuActive.value = !isMenuActive.value;
  };

  const handleSmoothScroll = (elementId) => {
    const target = document.querySelector(elementId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
      });
      isMenuActive.value = false;
    }
  };

  const activeSection = ref("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 100) {
        activeSection.value = section.getAttribute("id");
      }
    });
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return {
    isMenuActive,
    toggleMenu,
    handleSmoothScroll,
    activeSection,
  };
}
