<template>
  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-form">
        <!-- Replace YOUR_FORM_ID with your actual Formspree form ID -->
        <form id="contactForm" action="https://formspree.io/f/mblojogz" method="POST" @submit="handleSubmit">
          <div class="form-group">
            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
          </div>
          <div class="form-group">
            <input type="email" name="email" class="form-control" id="email" placeholder="Your Email" required />
          </div>
          <div class="form-group">
            <input type="text" name="subject" class="form-control" id="subject" placeholder="Subject" required />
          </div>
          <div class="form-group">
            <textarea name="message" class="form-control" id="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Send Message</button>

          <!-- Hidden success message that will be shown after successful form submission -->
          <div id="formSuccess" class="form-success" :class="{show: formSuccess}">Thank you for your message! I'll get back to you as soon as possible.</div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  import {useContactForm} from "../composables/useContactForm";

  export default {
    name: "ContactSection",
    setup() {
      const {formSuccess, handleSubmit} = useContactForm();

      return {
        formSuccess,
        handleSubmit,
      };
    },
  };
</script>
