import { ref } from 'vue';

export function useContactForm() {
  const formSuccess = ref(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        formSuccess.value = true;
        form.reset();

        setTimeout(() => {
          formSuccess.value = false;
        }, 5000);
      } else {
        alert('There was an issue submitting the form. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please check your internet connection and try again.');
    }
  };

  return {
    formSuccess,
    handleSubmit
  };
}