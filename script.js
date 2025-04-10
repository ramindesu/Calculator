const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.value = '';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = 'Error';
        currentInput = '';
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
// Add keyboard support 
document.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
      display.value = currentInput;
    } catch {
      display.value = 'Error';
      currentInput = '';
    }
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (key === 'Escape') {
    currentInput = '';
    display.value = '';
  } else if ('0123456789+-*/.'.includes(key)) {
    currentInput += key;
    display.value = currentInput;
  }
});
