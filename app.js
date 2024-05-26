// app.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        // Clear previous errors
        clearErrors();

        // Validate First Name
        if (firstName.value.trim() === '') {
            showError(firstName, 'First Name cannot be empty');
            valid = false;
        }

        // Validate Last Name
        if (lastName.value.trim() === '') {
            showError(lastName, 'Last Name cannot be empty');
            valid = false;
        }

        // Validate Email
        if (!isValidEmail(email.value.trim())) {
            showError(email, 'Looks like this is not an email');
            valid = false;
        }

        // Validate Password
        if (password.value.trim() === '') {
            showError(password, 'Password cannot be empty');
            valid = false;
        }

        if (valid) {
            alert('Form submitted successfully!');
        }
    });

    togglePassword.addEventListener('click', () => {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        togglePassword.textContent = type === 'password' ? '👁️' : '🙈';
    });

    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.style.display = 'flex';
        errorElement.querySelector('img').style.display = 'inline';
        errorElement.querySelector('span').textContent = message;
        input.classList

  