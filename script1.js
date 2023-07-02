$(document).ready(function() {
  $('#registrationForm').submit(function(event) {
    event.preventDefault(); // Prevent default form submission

    // Reset error messages
    $('.error').text('');

    // Get form values
    var name = $('#name').val().trim();
    var lastName = $('#lastName').val().trim();
    var email = $('#email').val().trim();
    var password = $('#password').val().trim();
    var confirmPassword = $('#confirmPassword').val().trim();

    // Validate name
    if (name === '') {
      $('#nameError').text('Name is required');
    } else if (!/^[a-zA-Z]+$/.test(name)) {
      $('#nameError').text('Name should only contain alphabetic characters');
    }

    // Validate last name
    if (lastName === '') {
      $('#lastNameError').text('Last Name is required');
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
      $('#lastNameError').text('Last Name should only contain alphabetic characters');
    }

    // Validate email
    if (email === '') {
      $('#emailError').text('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      $('#emailError').text('Invalid email format');
    }

    // Validate password
    if (password === '') {
      $('#passwordError').text('Password is required');
    } else if (password.length < 8) {
      $('#passwordError').text('Password should be at least 8 characters long');
    } else if (!/[0-9]/.test(password) || !/[a-z]/.test(password)) {
      $('#passwordError').text('Password should contain at least one digit and one lowercase letter');
    }

    // Validate confirm password
    if (confirmPassword === '') {
      $('#confirmPasswordError').text('Confirm Password is required');
    } else if (password !== confirmPassword) {
      $('#confirmPasswordError').text('Passwords do not match');
    }

    // If there are no errors, display success message
    if ($('.error').text() === '') {
      $('#successMessage').text('Registration successful').addClass('success');
      // You can submit the form here or perform any other necessary actions
      // $('#registrationForm').submit();
    }
  });

  // Change the color of the "termsAgreement" checkbox to red on page load
  $('#termsAgreement').css('color', 'red');
});





