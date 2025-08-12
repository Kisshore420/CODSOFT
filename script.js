const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } 
    else if (value === 'AC') {
      currentInput = '';
    } 
    else {
      currentInput += value;
    }

    display.value = currentInput;
  });
});