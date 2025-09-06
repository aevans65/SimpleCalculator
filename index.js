// CALCULATOR PROGRAM

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = "";
}
function calculateResult() {
  try {
    let expression = display.value;
    expression = expression.replace(/(\d+(?:\.\d+)?)%(\d+(?:\.\d+)?)/g, '($1 / 100) * $2');

    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}
 
function backspace() {
    display.value = display.value.slice(0, -1);
}   
function toggleValue() {

        if (display.value.startsWith('-')) {
            display.value = display.value.slice(1);
        } else {
            display.value = '-' + display.value;
        }
    }

