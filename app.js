document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      validateForm();
    });
  
    function validateForm() {
      let isValid = true;
  
      if (!firstName.value.trim()) {
        showError(firstName, 'firstNameError');
        isValid = false;
      } else {
        hideError('firstNameError');
      }
  
      if (!lastName.value.trim()) {
        showError(lastName, 'lastNameError');
        isValid = false;
      } else {
        hideError('lastNameError');
      }
  
      if (!email.value.trim() || !validateEmail(email.value.trim())) {
        showError(email, 'emailError');
        isValid = false;
      } else {
        hideError('emailError');
      }
  
      if (!password.value.trim()) {
        showError(password, 'passwordError');
        isValid = false;
      } else {
        hideError('passwordError');
      }
  
      if (isValid) {
        // Handle form submission
        console.log('Form is valid');
      }
    }
  
    function showError(input, errorId) {
      const errorMessage = document.getElementById(errorId);
      input.classList.add('error');
      errorMessage.style.display = 'flex';
    }
  
    function hideError(errorId) {
      const errorMessage = document.getElementById(errorId);
      errorMessage.style.display = 'none';
    }
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  