<template>
    <!-- About Section -->
    <section id="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-img">
                    <img :src="profileImg" alt="Profile Picture">
                </div>
                <div class="about-text">
                    <p>Hello! I'm a passionate web developer with a strong foundation in HTML, CSS, and JavaScript. My journey in web development began during my studies in Computer Science, where I discovered my love for creating interactive and user-friendly websites.</p>
                    <p>With X years of experience in the field, I've worked on various projects ranging from small business websites to complex web applications. I'm constantly learning new technologies and techniques to stay updated with the ever-evolving web development landscape.</p>
                    <p>When I'm not coding, you can find me exploring new hiking trails, reading tech blogs, or experimenting with new recipes in the kitchen.</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import profileImg from '../assets/profile.jpg'; 
export default {
    name: "AboutSection",
    data() {
        return {
            profileImg: profileImg, // Path to your profile image
        };
    },
};
</script>