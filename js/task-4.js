const loginForm = document.querySelector('.login-form');
const labels = loginForm.querySelectorAll('label');
const inputs = loginForm.querySelectorAll('input');
const button = loginForm.querySelector('button');


labels.forEach(label => {
  label.classList.add('label-4'); // Додаємо клас для label
});

inputs.forEach(input => {
  input.classList.add('input-4'); // Додаємо клас для input
});

button.classList.add('button-4'); 

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  const { email, password } = event.target.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in'); 
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue
  };

  console.log(formData);

  loginForm.reset();
});

