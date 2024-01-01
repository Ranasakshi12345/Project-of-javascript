
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const validationMessage = document.getElementById('validationMessage');
  
    if (email.includes('@') && password.length >= 8) {
      validationMessage.textContent = 'Valid email and password!';
      validationMessage.className = 'success'; // Apply success style
      validationMessage.style.color ="green";
    } else {
      validationMessage.textContent = 'Invalid email or password!';
      validationMessage.className = 'error'; // Apply error style
      validationMessage.style.color = "red";
    }
  });
  
  