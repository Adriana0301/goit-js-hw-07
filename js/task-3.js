const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputElement.classList.add('input-3'); // Заміна 'input-class' на бажане ім'я класу
outputElement.closest('h1').classList.add('title-3');

inputElement.addEventListener('input', (event) => {
  const inputValue = event.target.value.trim();
  if (inputValue === '') {
    outputElement.textContent = 'Anonymous';
  } else {
    outputElement.textContent = inputValue;
  }
});
