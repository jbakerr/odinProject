function add(num1, num2){
  return num1 + num2
}

function subtract(num1, num2){
  return num1 - num2
}

function multiply(num1, num2){
  return num1 * num2
}

function divide(num1, num2){
  return num1 / num2
}

function operate(num1, operator, num2){
  if (operator == "+") {
    return add(num1, num2)
  } else if(operator == "-"){
    return subtract(num1, num2)
  } else if (operator == "*") {
    return multiply(num1, num2)
  } else if (operator == "/") {
    return divide(num1, num2)
  }
}


function updateDisplay(command_array, item){
  const display = document.getElementById('display');
  display.textContent = command_array[item];
}

let command_array = [""]
let active_calc = false;


function addNum(command_array, input){
  possible_commands = ["+", "*", "/", "-"]
  if (command_array.length == 0){
    command_array.push(input)
    updateDisplay(command_array, 0);
  } else if(command_array.length == 1 & active_calc == false){
    command_array[0] += input
    updateDisplay(command_array, 0);
  }
   else if (command_array.length == 2){
    command_array.push(input);
    updateDisplay(command_array, 2);
  }
}

function addFunction(command_array, input){
  if(command_array.length == 0){
  }else if(command_array.length == 1){
    command_array.push(input)
  }
}

function clearCommandArray(command_array){
  command_array.length = 0
  updateDisplay(command_array, 0);
  active_calc = false;
}

function calculate(command_array){
  if(command_array.length == 3){
    let num1 = parseInt(command_array[0], 10);
    let num2 = parseInt(command_array[2], 10);
    let operator = command_array[1]
    let result = operate(num1, operator, num2)
    command_array.length = 0
    command_array.push(result);
    updateDisplay(command_array, 0);
    active_calc = true;
  }
}

const numButtons = document.querySelectorAll(".num");
const functionButtons = document.querySelectorAll(".function");
const calcButton = document.getElementById("calc");
const clearButton = document.getElementById("clear")

clearButton.addEventListener('click', function(){clearCommandArray(command_array)})

calcButton.addEventListener('click', function(){calculate(command_array)})

numButtons.forEach(num => {
  num.addEventListener('click', function () {addNum(command_array, num.textContent)})
});

functionButtons.forEach(button => {
  button.addEventListener('click', function(){addFunction(command_array, button.textContent)})
})
