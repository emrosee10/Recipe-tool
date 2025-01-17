// Handle the signup form submission
document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  // Hide the signup section
  document.getElementById('signup-section').style.display = 'none';

  // Show the success message
  document.getElementById('success-message').style.display = 'block';
});
